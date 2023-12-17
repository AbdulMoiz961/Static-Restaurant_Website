import React from 'react'

import { images } from '../../constants'
import './AboutUs.css'

const AboutUs = () => {
  return (
    <div className='app__aboutus app__bg flex__center section__padding' id='about'>
      
      <div className='app__aboutus-overlay flex__center'>
        <img src={images.E} alt="E letter" />
      </div>

      <div className='app__aboutus-content flex__center'>
      
        <div className='app__aboutus-content_about'>
          <h1 className='headtext__cormorant'>About Us</h1>
          <img src={images.spoon} alt="about_spoon" className='spoon__img' />
          <p className='p__opensans'>At L'Épicurien, our story is one of passion for exquisite cuisine and an unwavering commitment to delivering an unparalleled dining experience. Nestled in the heart of the City, our restaurant is a celebration of French culinary artistry, where every dish is meticulously crafted to evoke a symphony of flavors.</p>
          <button type='button' className='custom__button'>Know More</button>
        </div>

        <div className='app__aboutus-content_knife flex__center'>
          <img src={images.knife} alt="about knife" />
        </div>

        <div className='app__aboutus-content_history'>
          <h1 className='headtext__cormorant'>Our History</h1>
          <img src={images.spoon} alt="about_spoon" className='spoon__img' />
          <p className='p__opensans'>Founded with a vision of bringing the soulful essence of French cuisine to you, L'Épicurien has been a cherished culinary destination since its establishment in 1999. Our story is one woven with a profound love for gastronomy, a commitment to excellence, and an enduring passion for creating extraordinary dining experiences.</p>
          <button type='button' className='custom__button'>Know More</button>
        </div>

      </div>
    </div>
  )
}

export default AboutUs