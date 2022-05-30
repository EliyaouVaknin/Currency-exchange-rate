import React from 'react'
import { Line } from 'react-chartjs-2'
import {Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend} from 'chart.js'
import '../Styles/Chart.css'

export default function Chart ({weekDataEUR_USD, weekDataUSD_GBP, weekDaysName, store}) {

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  )

  return (
    <div className='ChartContainer container card'>
      <div className='row'>
        <div className='col-md-6'>
          <h3 style={{ textAlign: 'center' }}>EUR_USD</h3>
          <Line
            data={{
              labels: [
                weekDaysName[0],
                weekDaysName[1],
                weekDaysName[2],
                weekDaysName[3],
                weekDaysName[4],
                weekDaysName[5],
                weekDaysName[6]
              ],
              datasets: [
                {
                  label: 'Exchange Rate',
                  data: weekDataEUR_USD,
                  fill: true,
                  backgroundColor: 'rgba(75,192,192,0.2)',
                  borderColor: 'rgba(75,192,192,1)'
                }
              ]
            }}
          />
        </div>
        <div className='col-md-6'>
          <h3 style={{ textAlign: 'center' }}>USD_GBP</h3>
          <Line
            data={{
              labels: [
                weekDaysName[0],
                weekDaysName[1],
                weekDaysName[2],
                weekDaysName[3],
                weekDaysName[4],
                weekDaysName[5],
                weekDaysName[6]
              ],
              datasets: [
                {
                  label: 'Exchange Rate',
                  data: weekDataUSD_GBP,
                  fill: true,
                  backgroundColor: 'rgba(75,192,192,0.2)',
                  borderColor: 'rgba(75,192,192,1)'
                }
              ]
            }}
          />
        </div>
        {window.location.pathname == '/' && (
          <button className='btn btn-primary my-3 col-md-3 mx-auto' onClick={() => store()}>Save</button>
        )}
      </div>
    </div>
  )
}
