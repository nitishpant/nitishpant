import React from 'react'
import "./Videos.css";
import mugshot from "./../../images/mugshot.png"
import youtube from "./../../images/utube.png"

const Videos = () => {
  return (
    <div className='Videos'>
        <h1 className='heading'>
            VIDEOS
        </h1>        
        <div className='imgBox'>
            <img src={mugshot} className="videoIcon" alt="logo"/>
        </div>
        
    </div>
  )
}

export default Videos