import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import MainLayout from './Components/MainLayout';
import './index.css';

export default (
    <Router>
     <Route component={MainLayout}>
     </Route>
    </Router>

);