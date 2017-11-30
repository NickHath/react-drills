import React from 'react';
import { Switch, Route } from 'react-router';

// components
import Home from './components/Home';
import Signup from './components/Signup';
import Details from './components/Details';

export default (
  <Switch>
    <Route exact path='/' component={ Home }/>
    <Route exact path='/signup' component={ Signup }/>
    <Route exact path='/details' component={ Details }/>
  </Switch>
)