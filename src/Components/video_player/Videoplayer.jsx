import React, { useRef } from 'react'
import './Videoplayer.css'
import video from '../../assets/video.mp4'

const video_player = ({play, setplay}) => {

  const player = useRef(null)

  const closeplayer = (e)=>{
    if(e.target === player.current){
      setplay(false)
    }
  }

  return (
    <div className={`video ${play?"": "hide"}`} ref={player} onClick={closeplayer}>
      <video src={video} autoPlay muted controls></video>
    </div>
  )
}

export default video_player
