import React from 'react';
import './App.css';
import ShopPage from './pages/shop/shop';
import HomePage from './pages/homepage/HomePage';
import {Route, Switch, Link} from 'react-router-dom';
import Header from './components/header/Header';

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={ShopPage}/>
      </Switch>
      
    </div>
  );
}

export default App;
