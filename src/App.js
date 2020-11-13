import React, { useState, useEffect } from 'react';
import './App.css'
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Tracker from './components/Tracker/Tracker';
import Graph from './components/Graph';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() { 
  
  return (
    <Router>
        <div>
          <Nav/>
        </div>
      <div className="app">
        <Switch>
          <Route path="/covid-vault" exact component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/tracker" component={Tracker}/>
          <Route path="/graph" component={Graph}/>
        </Switch>
        
      </div>
    </Router>
  );
}

export default App;
