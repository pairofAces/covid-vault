import React from 'react';
import './App.css';
import About from './About';
import Tracker from './Tracker';
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
        </div>
    )
}

export default Router;