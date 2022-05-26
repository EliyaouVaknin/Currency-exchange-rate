const mongoose = require('mongoose')
const express = require(`express`)
const bodyParser = require('body-parser')
const app = express()
const port = 3001
const cors = require('cors')
mongoose.connect('mongodb://localhost:27017/Currency')
app.listen(port, () => console.log(`server is live on port ${port}`))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.urlencoded({ extended: false }))

app.use(cors())

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error: '))
db.once('open', () => console.log('MongoDB Connected'))

const CurrencySchema = mongoose.Schema({
  weekDataEUR_USD: String,
  weekDataUSD_GBP: String,
  weekDaysName: String
})

const Currency = mongoose.model('Currency', CurrencySchema)

app.get('/', async (req, res) => {
  tmp = await Currency.find({})
  res.json(tmp)
})

app.post('/', async (req, res) => {
  var myData = new Currency({
    weekDataEUR_USD: req.body.weekDataEUR_USD,
    weekDataUSD_GBP: req.body.weekDataUSD_GBP,
    weekDaysName: req.body.weekDaysName
  })
  await myData.save()
  res.json(myData)
})
