import React from 'react'
import { Email, Phone } from '../../assets/svg'
import { Button } from '../../components/Button/Button'
import './Contact.scss'
export const Contact = () => {
  return (
    <div className='contact'>
      <div className="contact-details-container">
        <h5>CONTACT</h5>
        <h1>We love receiving messages from you, we are waiting for it.</h1>
        <div className="contact-details">
          <Phone/>
          <div className="contact-detail">
            <p>Phone</p>
            <h3>+62 1234 8921</h3>
          </div>
        </div>
        <div className="contact-details">
          <Email/>
          <div className="contact-detail">
            <p>Email</p>
            <h3>support@MerkLabs.tld</h3>
          </div>
        </div>
      </div>
    <div className="contact-form">
      <div className="contact-form-input-container">
        <div>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" />
        </div>
        <div>
        <label htmlFor="email">Email</label>
        <input type="text" id='email'/>
        </div>
      </div>

      <div className="contact-form-input-container">
        <div>
        <label htmlFor="subject">Subject</label>
        <input type="text" id='subject'/>
        </div>

      </div>


      <div className="contact-form-input-container">
        <div>
        <label htmlFor="message">Message</label>
        <textarea name="message" id="message" cols="30" rows="10"></textarea>
        </div>
      </div>
      
      <Button title="Send Message"/>
     
    </div>
    </div>
  )
}
