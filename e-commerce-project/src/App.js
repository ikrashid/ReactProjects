import React from 'react';
import './App.css';
import ShopPage from './pages/shop/shop';
import HomePage from './pages/homepage/HomePage';
import {Route, Switch, Link} from 'react-router-dom';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={ShopPage}/>
      </Switch>
      
    </div>
  );
}

export default App;
