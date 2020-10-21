import React from 'react';
import { Link } from 'react-router-dom';


function Home() {
    
     return (
         <Link to="/tracker"> 
            <div className="pulse">
                <span></span>
                <span></span>
            </div>
         </Link>
    )
}

export default Home
