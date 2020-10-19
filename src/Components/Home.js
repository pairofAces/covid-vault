import React from 'react';
import { Link } from 'react-router-dom';
// import space from './space.jpg'
// import ReactGlobe from 'react-globe';

function Home() {
    // document.body.classList.add('home')
    // document.body.style.backgroundImage = `url(${space})`;

    const zoom = () => {

    }
    
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
