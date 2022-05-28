import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Header.css'

export default function Header () {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-md-3'>
          <img className='img-fluid' src={require('../Images/logo.webp')}></img>
        </div>
        <div className='col-md-5' style={{ textAlign: 'left' }}>
          <h2>Exchange rate application</h2>
        </div>
        <div className='col-md-4'>
          <Link to='/history' className='btn btn-primary mx-3'>
            View History
          </Link>
          <Link to='/' className='btn btn-primary'>
            Home
          </Link>
        </div>
      </div>
    </div>
  )
}
