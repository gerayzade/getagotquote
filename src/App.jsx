import React from 'react';
import { Route, Switch } from 'react-router-dom';
// components
import About from './pages/About';
import Quote from './pages/Quote';

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={Quote} />
      <Route exact path="/about" component={About} />
    </Switch>
  )
}