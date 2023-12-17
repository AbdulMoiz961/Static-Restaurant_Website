import React from 'react'

import { images } from '../../constants'
import './Header.css'
import { SubHeading } from '../../components'

const Header = () => {
  return (
    <div className='app__header app__wrapper section__padding' id='home'>
      
      <div className='app__wrapper_info'>
        <SubHeading title="Indulge in Culinary Delights" />
        <h1 className='app__header-h1'>The Key To Fine Dining</h1>
        <p className='p__opensans' style={{ margin: '1.5rem 0' }}>Savor the artistry of fine dining at L'Épicurien, where each dish tells a tale of passion, creativity, and authentic flavors. Our menu, curated with the finest ingredients, invites you to embark on a culinary journey that transcends the ordinary.</p>
        <button type='button' className='custom__button'>Explore Menu</button>
      </div>

      <div className='app__wrapper_img'>
        <img src={images.Group2} alt="header img" />
      </div>

    </div>
  )
}

export default Header