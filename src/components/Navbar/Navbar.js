import React, { useState } from 'react';
import './Navbar.css';
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from 'react-icons/gi';

function Navbar() {

    const [showIcons, setshowIcons] = useState(false);
  return (
        <nav className="navbar">
            <div className="logo">
                <h2>
                    Nitish Pant
                </h2>
            </div>
            <div className={showIcons? "menu-link mobile-menu-link": "menu-link"}>
                <ul>
                    <li>
                        <Link className="navbarLink" to='/' onClick={()=>setshowIcons(!showIcons)}>Home</Link>
                    </li>
                    <li>
                        <Link className="navbarLink" to='/Hire' onClick={()=>setshowIcons(!showIcons)}>Contact</Link>
                    </li>
                    <li>
                        <Link className="navbarLink" to='/Projects' onClick={()=>setshowIcons(!showIcons)}>Projects</Link>
                    </li>
                    <li>
                        <Link className="navbarLink" to='/Videos' onClick={()=>setshowIcons(!showIcons)} >Videos</Link>
                    </li>
                </ul>
            </div>
                <div className="hamburger-menu">
                    <a href="#" onClick={()=>setshowIcons(!showIcons)}>
                        <GiHamburgerMenu size={40}/>
                    </a>
                </div>
        </nav>
  )
}

export default Navbar