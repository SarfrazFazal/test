import React from 'react'
import "./Home.css"
import {Link} from "react-router-dom";
const Home = () => {
    return (
        <div className = "homepage">
            
            <div className="content">
            <p className = "information"> welcome to my page! my name is sarfraz and i am the wizz behind this page! 
                i learnt this skill from MR Sule at <span className="highlight">Robotech labs.</span>
                I am so interested in this project!
            </p>
            <button className="click">
                <Link to="/signup">READ MORE</Link>
                </button>
            </div>
           
            <div className="image">
                <img src= "./image/pngitem_161158.png" className="picture" alt= "picha"/>
            </div>
            
        </div>
      
    )
}

export default Home
