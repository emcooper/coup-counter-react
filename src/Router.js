import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import MainLayout from './Components/MainLayout';
import SelectGame from './Components/SelectGame';

import './index.css';

export default (
    <Router>
        <div>
            <MainLayout />
            <div class ="content">
            <Route path="/" component={SelectGame}>
            </Route>
            </div>
        </div>
    </Router>

);