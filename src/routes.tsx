import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Components/Header';
import HomePage from './Pages/HomePage';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path='/' component={HomePage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
