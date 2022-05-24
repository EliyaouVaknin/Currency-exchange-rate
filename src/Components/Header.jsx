import React from 'react'
import "../Styles/Header.css"

export default function Header() {
  
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3">
        <img className="img-fluid" src={require('../Images/logo.webp')}></img>
        </div>
        <div className="col-md-9" style={{textAlign: "left"}}>
          <h2>Exchange rate application</h2>
        </div>
      </div>
    </div>
  )
}
