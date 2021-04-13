import React from 'react';
import './App.css';
import MenuItem from './components/menuItem/MenuItem';
import HomePage from './pages/homepage/HomePage';
import {Route, Switch, Link} from 'react-router-dom';

function App() {
  const HatsPage = () =>(
    <div>
      <h1>Hats!</h1>
    </div>
  )

  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop/hats' component={HatsPage}/>
      </Switch>
      
    </div>
  );
}

export default App;
