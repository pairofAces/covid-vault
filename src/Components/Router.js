import React from 'react';
import './App.css';
import About from './About';
import Tracker from './Tracker';
import Graph from './Graph';
import { Route } from 'react-router-dom';

const Router = () => {
    return(
        <div>
            <Route path="/about">
                <About/>
            </Route>
            <Route path="/tracker">
                <Tracker/>
            </Route>
            <Route path="/graph">
                <Graph/>
            </Route>
        </div>
    )
}

export default Router;