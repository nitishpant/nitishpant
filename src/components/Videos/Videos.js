import React from 'react'
import "./Videos.css";
import mugshot from "./../../images/mugshot.png"
import youtube from "./../../images/utube.png"

const Videos = () => {
  return (
    <>
    <div className='Videos'>
        <h1 className='heading'>
            VIDEOS
        </h1>  
        <p>I Love to Code but I do other stuff as well!</p>     
    </div>

        <div className="videosTab">          
          <iframe width="350" height="206" src="https://www.youtube.com/embed/l-YzifAQMlI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen className='vid'></iframe>
          <iframe width="350" height="206" src="https://www.youtube.com/embed/v4aTWLbwHz8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen className='vid'></iframe>
          <iframe width="350" height="206" src="https://www.youtube.com/embed/x5GsBgI3mQI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen className='vid'></iframe>
        </div>
        </> 
  )
}

export default Videos