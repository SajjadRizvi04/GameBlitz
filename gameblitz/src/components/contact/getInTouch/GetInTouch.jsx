import React from 'react'
import "./GetInTouch.css"

const GetInTouch = () => {
  return (
    <div className='get-in-touch-main'>
        <div>
            <h1 className='get-in-touch-heading'>Get In Touch.</h1>
            <p className='contact-description-p'>Questions or Feeback? We're here to help.</p>
        </div>
        
        <form>
            <div className='contact-first-row'>
                <input type='text' placeholder='First Name' name='firstName'/>
                <input type='text' placeholder='Last Name' name='lastName'/>
            </div>
            <input type='email' placeholder='Email' name='email'/>
            <textarea placeholder='Message' name='message'rows='6'></textarea>
            <button type='submit'>Submit</button>
            
        </form>
    </div>
  )
}

export default GetInTouch