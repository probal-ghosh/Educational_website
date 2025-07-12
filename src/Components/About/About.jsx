import React from 'react'
import'./About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setplay}) => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img'/>
            <img src={play_icon} alt="" className='play-icon' 
            onClick={()=>{
              setplay(true)
            }}/>
        </div>
        <div className="about-right">
            <h3>About University</h3>
            <h2>Nurturing Tomorrow's Leaders Today</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi doloremque minima perferendis 
                quas accusamus architecto excepturi iure molestiae 
                odio voluptatibus ipsum esse quam facilis aut dolor, vero corporis repellat dolores.
                </p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi doloremque minima perferendis 
                quas accusamus architecto excepturi iure molestiae 
                odio voluptatibus ipsum esse quam facilis aut dolor, vero corporis repellat dolores.
                </p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi doloremque minima perferendis 
                quas accusamus architecto excepturi iure molestiae 
                odio voluptatibus ipsum esse quam facilis aut dolor, vero corporis repellat dolores.
                </p>
        </div>
    </div>
  )
}

export default About
