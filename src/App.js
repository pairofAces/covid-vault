import React, { useState, useEffect } from 'react';
import './App.css'
import Nav from './Nav';
import About from './About';
import Tracker from './Tracker';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



function App() { 
  
  return (
    <Router>
      <div className="app">
        <Nav/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/tracker" component={Tracker}/>
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>This is where the initial globe animation will be</h1>
  </div>
)

export default App;
