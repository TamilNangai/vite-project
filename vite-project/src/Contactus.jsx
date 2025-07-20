import React from 'react'
import "./Contactus.css"
import contactusDv from './assets/contactus/contactusDv.png'
import contactusTv from './assets/contactus/contactusTv.png'
import contactusMv from './assets/contactus/contactusMv.png'
function Contactus() {
  return (
    <div id='container'>
        <img id='contactusDv' src={contactusDv} alt="contactusDv" />
        <img id='contactusTv' src={contactusTv} alt="contactusTv" />
        <img id='contactusMv' src={contactusMv} alt="contactusMv" />
    </div>
  )
}

export default Contactus