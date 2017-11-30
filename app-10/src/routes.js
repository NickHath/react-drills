import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Products from './components/Products';
import Details from './components/Details';

export default (
  <Switch>
    <Route exact path='/' component={ Products }/>
    <Route path='/details/:id' component={ Details }/>
  </Switch>
)