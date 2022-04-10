import React from 'react'
import { MerkLogo } from '../../assets/svg'
import { Button } from '../Button/Button'
import './Footer.scss'
import { FooterLinks } from '../../data/FooterLinks'
export const Footer = () => {

  return (

    <div className='footer'>
      <div className="footer-headline-container">
        <h1>We've prepared everything, it's time for you to tell the problem</h1>
        <Button title="Send Quote" />
        <Button title="Ask" />
      </div>
      <div className="footer-links-container">
        <div className="footer-intro">
          <div className="footer-logo">
            <MerkLogo />
            <h1>Merk</h1>
          </div>
          <h5>Copyright © 2021</h5>
          <h5>Design By Merk Labs</h5>
        </div>
        <div className="footer-links">

          {FooterLinks.map((link) => {

            return (
              <div className="footer-links-section">
                <h4>{link.section}</h4>
                {
                  link.links.map((l) => {
                    return (
                      <p>{l.title}</p>
                    )
                  }
                  
                 )
                }
                
                </div>  
                )
             
              
            })}


        </div>
      </div>
    </div>
  )
}
