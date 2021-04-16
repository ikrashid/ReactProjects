import React, {Component} from 'react';
import './App.css';
import ShopPage from './pages/shop/shop';
import HomePage from './pages/homepage/HomePage';
import {Route, Switch, Link} from 'react-router-dom';
import Header from './components/header/Header';
import SignInAndOut from './pages/signInAndOut/SignInAndOut';
import {auth} from './firebase/firebase.utils';

class App extends Component {
  constructor (){
    super();

    this.state = {
      currentUser : ''
    }
  }
  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user =>{ //subscribed here, always open as long as component is mounted
      this.setState({currentUser: user});//user persistence!!! 
      console.log(user);
    })
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth(); //this works because onAuthStateChanged returns method firebase.unsubscribe()
  }
  render(){
    return (
      <div>
        <Header signedIn = {this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route path='/signIn' component={SignInAndOut}/>
        </Switch>
        
      </div>
    )
  }
}

export default App;
