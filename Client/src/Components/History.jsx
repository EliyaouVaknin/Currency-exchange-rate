import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Chart from './Chart'
import axios from 'axios'

export default function History ({ deleteFunction }) {
  const [database, setDatabase] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3001/').then(res => setDatabase(res.data))
  }, [])

  return (
    <>
      {window.location.pathname == '/history' && database.length > 0 && (
        <Link
          to='/'
          className='btn btn-primary my-3 col-md-3 mx-auto'
          onClick={() => deleteFunction()}
        >
          Clear History
        </Link>
      )}
      {database &&
        database.map((e, i) => (
          <Chart
            weekDaysName={e.weekDaysName}
            weekDataEUR_USD={e.weekDataEUR_USD}
            weekDataUSD_GBP={e.weekDataUSD_GBP}
            index={i}
          />
        ))}
    </>
  )
}
