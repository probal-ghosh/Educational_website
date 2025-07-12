import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonial from './Components/Testimonials/Testimonial'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Videoplayer from './Components/video_player/Videoplayer'

const App = () => {

  const [play, setplay] = useState(false)
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className='container'>
        <Title subTitle='Our Program' title ='What we offer'/>
          <Programs/>
          <About setplay={setplay}/>
          <Title subTitle='Gallery' title ='Campus Photos'/>
          <Campus/>
          <Title subTitle='Testimonials' title ='What Student Says'/>
          <Testimonial/>
          <Title subTitle='Contact Us' title ='What Student Says'/>
          <Contact/>
          <Footer/>
      </div>
      <Videoplayer play= {play} setplay = {setplay}/>
    </div>
  )
}

export default App
