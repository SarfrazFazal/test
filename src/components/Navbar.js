import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <div className = "Navigation">
            <div className = "logo">
                <img src="./image/logo.png" className="logo" alt="logo"/>
            </div>
            <div className = "link">
                <ul>
                    <li><Link to="/Home">HOME</Link></li> 
                    <li><Link to="/About">ABOUT</Link></li> 
                    <li><Link to="/Contact">CONTACT</Link></li>
                    <li><Link to="/News">NEWS</Link></li>
                </ul>

            </div>
            
        </div>
    )
}

export default Navbar
