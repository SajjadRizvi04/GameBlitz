import React from 'react'
import "./ContactCard.css"
import { MdOutlineEmail } from "react-icons/md";
import { CiPhone } from "react-icons/ci";
import { AiFillTwitterCircle } from "react-icons/ai";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa6";




function ContactCard() {
  return (
    <section className='contact-card-template'>
        <h2 className='my-contacts-head'>Contacts</h2>
        <div className='contact-card-det-1'>
            <div className='email-dets'>
                <MdOutlineEmail color='#f77f00' size='20px'/>
                <span>thomasanesu41@gmail.com</span>
            </div>
            <div className='phone-dets'>
                <CiPhone color='#f77f00' size='20px'/>
                <span>+91 9172736726</span>
            </div>
            <div className='icons-div'>
                <AiFillTwitterCircle size='40' className='transition-all hover:scale-105' />
                <RiInstagramFill size='40' className='transition-all hover:scale-105'/>
                <FaFacebook size='40' className='transition-all hover:scale-105'/>

            </div>
        </div>
    </section>
  )
}

export default ContactCard