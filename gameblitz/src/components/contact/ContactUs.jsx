import React from 'react'
import Navbar from '../shared/Navbar'
import GetInTouch from './getInTouch/GetInTouch'
import "./ContactUs.css"
import ContactCard from './contact card/ContactCard'
import Location from './location/Location'
import Footer from '../shared/footer/Footer'

function Contact() {
  return (
    <>
    <div className='contact-page-template'>
      <GetInTouch />
      <div className='location-and-contact'>
        <Location/>
        <ContactCard/>
      </div>
    </div>
    <Footer/>
    </>
    
  )
}

export default Contact
