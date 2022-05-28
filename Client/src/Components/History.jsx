import React, { useState, useEffect } from 'react'
import Chart from './Chart'
import axios from 'axios'

export default function History () {
  const [database, setDatabase] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3001/').then(res => setDatabase(res.data))
  }, [])

  return (
    <>
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
