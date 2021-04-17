import React, {Component} from 'react';
import './App.css';
import ShopPage from './pages/shop/shop';
import HomePage from './pages/homepage/HomePage';
import {Route, Switch} from 'react-router-dom';
import Header from './components/header/Header';
import SignInAndOut from './pages/signInAndSignUp/SignInAndSignUp';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';

class App extends Component {
  constructor (){
    super();

    this.state = {
      currentUser : null
    }
  }
  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth =>{ //subscribed here, always open as long as component is mounted
      //this.setState({currentUser: user});//user persistence!!! 
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot =>{
          //console.log(snapShot.data()) //shows us a snapshot of whats in the database
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
        })
      }
      else{
        this.setState({currentUser: userAuth})
      }
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
