import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className='hero-text'>
        <h1>Your journey to knowledge starts here.</h1>
        <p>Let me know which section you want more examples for or if you need them tailored to a specific audience (kids, college students, professionals, etc.).</p>
        <button className='btn'>Explore <img src={dark_arrow} alt="" /></button>
      </div>
    </div>
  )
}

export default Hero
