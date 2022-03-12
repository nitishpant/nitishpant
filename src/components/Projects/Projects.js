import React from 'react'
import "./Projects.css"

const Projects = () => {
  return (
    <>
    <div className='Projects'>
        <h1 className='heading'>Projects ! </h1>
    </div>
    <div className="projectsdiv">
      <div className="projectHeading">
           Tinyurl Application
          <div className="projectDesc">
           Built a URL shortener web application that
            provides the user with a shortened URL for
            any provided long URL. Used shortId npm
            package to generate unique shortId for the
            shortened URL.
            < div className="techStack">
            Tech stack used - Reactjs, HTML/CSS, Express JS, Node JS.
            </div>
            <div className="github">
              <h3>Source Code</h3>
            </div>

          </div>
      </div>
      <div className="projectHeading">
          Global Chat Application
          <div className="projectDesc">
          A global responsive chat application where
            users can join and chat in real time, see who’s
            online based on SocketIO and hosted on
            Netlify.
            <div className="techStack">
            Tech stack used - Html/CSS, Reactjs, Node JS,
            SocketIO
            </div>
            <div className="github">
              <h3>Source Code</h3>
            </div>
            <div className="liveDemo">
              <h3>Live Demo!</h3>
            </div>
          </div>
      </div>
      <div className="projectHeading">
            Ancient Text Translator
          <div className="projectDesc">
          Developed a Neural Machine Translator using
          RNN and other Deep learning techniques
          with Pytorch that was able to translate Low
          resource languages eg-Sundanese, Sanskrit
          to a common language like English with 82%
          accuracy.
              <div className="techStack">   
          Tech stack used - Python, Html/CSS,
          Javascript, Flask.
              </div>
            <div className="github">
              <h3>Source Code</h3>
            </div>
          </div>
      </div>
    </div>
    </>
  )
}

export default Projects