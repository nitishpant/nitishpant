import React from 'react';
import "./Home.css";
import nitishpant from "./../../images/nitishpant.png";

const Home = () => {
  return (
      <>
      <div class="content">
        <div className='nitishHeading'>
          Hello there, I am Nitish Pant
        </div>
        <div className='description'>
        A software engineer having just over a year of experience who constantly seeks out innovative solutions to everyday problems and mixes creativity with minimalism.
        </div>
      </div>
    <div>
        <div className="card" >
            <img src={nitishpant} alt="Logo" className='mainImage'/>
        </div>
    </div>
    </>
    
  )
}

export default Home;