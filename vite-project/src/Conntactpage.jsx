import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './Navbar'
import Contactus from './Contactus'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar/>
    <Contactus/>
  </StrictMode>
)