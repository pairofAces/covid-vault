import React, { useState, useEffect } from 'react';
import './App.css'
import Nav from './Nav';
import Home from './Home';
import About from './About';
import Tracker from './Tracker';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ReactGlobe from 'react-globe';



function App() { 
  
  return (
    <Router>
        <div>
          <Nav/>
        </div>
      <div className="app">
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/tracker" component={Tracker}/>
        </Switch>
        
      </div>
    </Router>
  );
}

// function Home() {
//   // return <ReactGlobe/>
//   document.body.style = ('background: url(src/earth-map.jpg);')
//   return (
//     <div>
//       <h1>Home Page</h1>
//     </div>
//   )
// }


export default App;
