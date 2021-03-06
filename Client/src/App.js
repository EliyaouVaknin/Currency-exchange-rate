import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './Components/Header'
import DateInput from './Components/DateInput'
import Chart from './Components/Chart'
import History from './Components/History'
import axios from 'axios'

function App() {
  const [weekDataEUR_USD, setWeekDataEUR_USD] = useState('');
  const [weekDataUSD_GBP, setWeekDataUSD_GBP] = useState('');
  const [weekDaysName, setWeekDaysName] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const apiKey = 'e6d56476b9a191585468';
  
  const convertCurrency = async (fromCurrency, toCurrency) => {
    fromCurrency = encodeURIComponent(fromCurrency);
    toCurrency = encodeURIComponent(toCurrency);
    var query = fromCurrency + '_' + toCurrency;
    var url = 'https://free.currconv.com/api/v7/convert?q=' + query + '&compact=ultra&date=' + fromDate + '&endDate=' + toDate + '&apiKey=' + apiKey;

    await fetch(url)
      .then(res => res.json())
      .then(res => {
        if (res.EUR_USD != null) {
          setWeekDataEUR_USD(Object.values(res.EUR_USD));
          setWeekDaysName(Object.keys(res.EUR_USD));
        } else {
          setWeekDataUSD_GBP(Object.values(res.USD_GBP));
          setWeekDaysName(Object.keys(res.USD_GBP));
        }
      })
  }

  const store = () => {
    axios
      .post('http://localhost:3001/', {
        weekDataEUR_USD: weekDataEUR_USD,
        weekDataUSD_GBP: weekDataUSD_GBP,
        weekDaysName: weekDaysName
      })
      .then(res => console.log(res))
      .catch(error => console.log(error))
  }

  const deleteFunction = async () => {
    await axios.delete('http://localhost:3001/')
  }

  return (
    <div className='App'>
      <Router>
        <Header />
        <DateInput setFromDate={setFromDate} setToDate={setToDate} convertCurrency={convertCurrency} />
        <Routes>
          <Route path='/' element={<Chart weekDataEUR_USD={weekDataEUR_USD} weekDataUSD_GBP={weekDataUSD_GBP} weekDaysName={weekDaysName} store={store} />} />
          <Route path='/history' element={<History deleteFunction={deleteFunction} />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
