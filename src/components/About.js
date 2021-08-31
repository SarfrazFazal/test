import React from 'react'
import "./About.css"
import {Link} from "react-router-dom";
const About = () => {
    return (
        <div className="aboutus">

            <div className="content">
            <p className = "information"> i am from mombasa kenya. i have come here for a few months and i will be leaving 
                <span className="highlight">very soon</span> for further studies.  
            </p>
            <button className="click">
                <Link to="/News">SPICY NEWS</Link>
                </button>
            </div>
           
            <div className="image">
                <img src="./image/pngitem_5182080.png" className="picture" alt="picha"/>
            </div>
            
        </div>
    )
}

export default About
