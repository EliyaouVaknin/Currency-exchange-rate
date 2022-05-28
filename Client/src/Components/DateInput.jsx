import React from 'react'
import '../Styles/DateInput.css'

export default function DateInput ({
  setFromDate,
  setToDate,
  convertCurrency
}) {
  var fromDate = new Date()
  var toDate = new Date()

  function setSecondDate () {
    var days = 7
    fromDate = document.getElementById('date1').value
    var tmp = new Date(fromDate)
    tmp.setDate(tmp.getDate() + parseInt(days))
    document.getElementById('date2').valueAsDate = tmp
    toDate = document.getElementById('date2').value
    setFromDate(fromDate)
    setToDate(toDate)
  }

  return (
    <div className='card col-md-10 mx-auto'>
      <input
        type='date'
        className='col-md-6 mx-auto my-3'
        name='date1'
        id='date1'
        onChange={() => setSecondDate()}
      />
      <input
        type='date'
        className='col-md-6 mx-auto'
        name='date2'
        id='date2'
        disabled
      />
      <button
        className='btn btn-primary col-md-3 mx-auto my-3'
        onClick={() => {
          convertCurrency('EUR', 'USD')
          convertCurrency('USD', 'GBP')
        }}
      >
        Submit
      </button>
    </div>
  )
}
