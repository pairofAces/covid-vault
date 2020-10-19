import React, { useState, useEffect } from 'react';
import './App.css'
import Nav from './Components/Nav';
import Home from './Components/Home';
import About from './Components/About';
import Tracker from './Components/Tracker';
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
