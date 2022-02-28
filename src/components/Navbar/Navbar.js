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
                        <Link className="navbarLink" to='/'>Home</Link>
                    </li>
                    <li>
                        <Link className="navbarLink" to='/Hire'>Hire</Link>
                    </li>
                    <li>
                        <Link className="navbarLink" to='/Projects'>Projects</Link>
                    </li>
                    <li>
                        <Link className="navbarLink" to='/Videos'>Videos</Link>
                    </li>
                </ul>
            </div>
                <div className="hamburger-menu">
                    <a href="#" onClick={()=>setshowIcons(!showIcons)}>
                        <GiHamburgerMenu/>
                    </a>
                </div>
        </nav>
  )
}

export default Navbar