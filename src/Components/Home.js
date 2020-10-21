import React from 'react';
import { Link } from 'react-router-dom';
import img from '../Images/CovidVault.png';


function Home() {

    
     return (
         <div className="home-column">
            <div className="title">
                <img className="image" src={img} alt="title"/>
            </div>

            <Link to="/tracker"> 
                <div className="pulse">
                    <span></span>
                    <span></span>
                </div>
            </Link>
         </div>
    )
}

export default Home
