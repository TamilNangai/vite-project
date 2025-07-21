import React from 'react'
import './About.css'
const  About=({Heading,Para})=> {
    return (
        <div id='container'>
            <div id="heading">{Heading}</div>
            <p id="para">{Para}
            </p>
        </div>
    )
}

export default About