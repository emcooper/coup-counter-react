import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

import MainLayout from './Components/MainLayout';
import SelectGame from './Components/SelectGame';
import Stats from './Components/Stats';
import Home from './Components/Home';

import './index.css';

export default (
    <Router>
        <div>
            <MainLayout />
            <div class ="content">
            <Route exact path="/" component={Home}>
            </Route>
            <Route path="/stats" component={Stats}>
            </Route>
            <Route path="/enter" component={SelectGame}>
            </Route>

            </div>
        </div>
    </Router>

);