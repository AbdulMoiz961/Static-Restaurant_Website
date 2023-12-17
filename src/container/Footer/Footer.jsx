import React from 'react'

import { FooterOverlay, NewsLetter } from '../../components'
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi'
import './Footer.css'
import { images } from '../../constants'

const Footer = () => {
  return (
    <div className='app__footer section__padding'>
      <FooterOverlay />
      <NewsLetter />

      <div className='app__footer-links'>
        <div className='app__footer-links_contact'>
          <h1 className='app__footer-headtext'>Contact Us</h1>
          <p className='p__opensans'>22 Rue de la Buffa, 06000 Nice, France</p>
          <p className='p__opensans'>+33 6 42 84 59 82</p>
          <p className='p__opensans'>+33 6 42 64 56 80</p>
        </div>

        <div className='app__footer-links_logo'>
          <img src={images.LaRestaurant} alt="footer_logo" />
          <p className='p__opensans'>"The best way to find yourself is to lose yourself in the service of others.”</p>
          <img src={images.spoon} alt="spoon" className='spoon__image' style={{ marginTop: 15 }} />
          <div className='app__footer-links_icons'>
            <FiFacebook />
            <FiTwitter />
            <FiInstagram />
          </div>
        </div>

        <div className='app__footer-links_work'>
          <h1 className='app__footer-headtext'>Working Hours</h1>
          <p className='p__opensans'>Monday-Friday:</p>
          <p className='p__opensans'>08:00 am -12:00 am</p>
          <p className='p__opensans'>Saturday-Sunday:</p>
          <p className='p__opensans'>07:00am -11:00 pm</p>
        </div>
      </div>

      <div className='footer__copyright'>
        <p className='p__opensans'>2010 L'Épicurien. All Rights Reserved.</p>
      </div>
    </div>
  )
}

export default Footer