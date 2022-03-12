import React from 'react'
import "./Hire.css";
import nodejs from "./../../images/skills/nodejs.png";
import css from "./../../images/skills/css.png";
import html from "./../../images/skills/html.png";
import reactjs from "./../../images/skills/reactjs.png";
import expressjs from "./../../images/skills/expressjs.png";
import cpp from "./../../images/skills/cpp.png";
import javascript from "./../../images/skills/javascript.png";
import java from "./../../images/skills/java.png";
import mongodb from "./../../images/skills/mongodb.png";
import mysql from "./../../images/skills/mysql.png";





const Hire = () => {
  return (
    <>
    <div className='hireComponent'>
        <h1 className="hireHeading" > Want to Contact me ?</h1>
        <div className="contactDetails">
          nitishpant9@gmail.com &nbsp;&nbsp;&nbsp;&nbsp;+91 9711033431
        </div>
        <div className="resume">
          <a href="https://drive.google.com/file/d/1OQAtqwwQbVbxJpju6togXfAjdyuZv9jS/view" target="_blank" className='resumeLink'> Download Resume </a>
        </div>
    </div>
        <div className="skills">
          Skills
        </div>
        <div className="skillComponent">
          <div className="webDev col">
            <h1 className='colHeading'>Web Development</h1>
            <div className="contentInside">              
              <img src={nodejs} alt="nodejs" className='skillImage' title="nodejs"/>
              <img src={reactjs} alt="reactjs" className='skillImage' title="reactjs"/>
              <img src={expressjs} alt="Logo" className='skillImage' title="expressjs"/>
              <img src={html} alt="Logo" className='skillImage' title="html"/>
              <img src={css} alt="Logo" className='skillImage' title="css"/>
            </div>
          </div>
          <div className="Languages col">
            <h1 className='colHeading'>Languages</h1>
            <div className="contentInside">              
              <img src={javascript} alt="Logo" className='skillImage' title="javascript"/>
              <img src={cpp} alt="Logo" className='skillImage' title="cpp"/>
              <img src={java} alt="Logo" className='skillImage' title="java"/>
            </div>
            
          </div>
          <div className="database col">
            <h1 className='colHeading'>Databases</h1>
            <div className="contentInside">              
              <img src={mysql} alt="Logo" className='skillImage' title="mysql"/>
              <img src={mongodb} alt="Logo" className='skillImage' title="mongodb"/>
            </div>
          
          </div>
        </div>
        <div className="mobileSkills">
          <div className="webdev">
            <h1 className='colHeading'>Web Development</h1>
            <div className="contentInside">              
              <img src={nodejs} alt="nodejs" className='skillImage' title="nodejs"/>
              <img src={reactjs} alt="reactjs" className='skillImage' title="reactjs"/>
              <img src={expressjs} alt="Logo" className='skillImage' title="expressjs"/>
              <img src={html} alt="Logo" className='skillImage' title="html"/>
              <img src={css} alt="Logo" className='skillImage' title="css"/>
            </div>
    
          </div>
          <div className="languageMobile">
            <h1 className='colHeading'>Languages</h1>
            <div className="contentInside">              
              <img src={javascript} alt="Logo" className='skillImage' title="javascript"/>
              <img src={cpp} alt="Logo" className='skillImage' title="cpp"/>
              <img src={java} alt="Logo" className='skillImage' title="java"/>
            </div>

          </div>
          <div className="mobileDB">
            <h1 className='colHeading'>Databases</h1>
            <div className="contentInside">              
              <img src={mysql} alt="Logo" className='skillImage' title="mysql"/>
              <img src={mongodb} alt="Logo" className='skillImage' title="mongodb"/>
            </div>

          </div>
        </div>
    </>
  )
}

export default Hire