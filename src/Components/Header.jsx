import React from 'react'
import "../Styles/Header.css"

export default function Header() {
  
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-2">
          <img src="../Images/logo.webp" />
        </div>
        <div className="col-md-10">
          <h3>Chainwire exchange rate</h3>
        </div>
      </div>
    </div>
  )
}
