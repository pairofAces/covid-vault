import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import img from '../Images/covid-19.png';

function Nav() {
    return (
        <nav>
            <Link to='/'>
                {/* put an img tag here */}
                <img src={img} className="top-nav-icon" alt="icon"/>
            </Link>
            <div className="nav-links">
                <Link to='/about' style={{color: "white", textDecoration: "none", fontWeight:"bold"}}>
                    <li>About</li>
                </Link>
                <Link to='/tracker' style={{color: "white", textDecoration: "none", fontWeight:"bold"}}>
                    <li>Tracker</li>
                </Link>
                <Link to='/graph' style={{color: "white", textDecoration: "none", fontWeight:"bold"}}>
                    <li>Graph</li>
                </Link>
            </div>
           
        </nav>
    )
}

export default Nav
