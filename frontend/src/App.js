import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.scss';

import Header from './components/header/Header';
import { Footer } from './components/footer/Footer';
import UserSignIn from './components/UserSignIn';
import StartScreening from './components/StartScreening';
import SetUpAccount from './components/SetUpAccount';
import BuildProfile from './components/BuildProfile';
import CreateProfileIntercept from './components/CreateProfileIntercept';
import {Dashboard} from './components/Dashboard';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import AboutUs from './components/AboutUs';
import Activities from './components/Activities';

import { getAllUsers, createUser } from './services/UserService'


class App extends Component {
  state = {
    user: {},
    users: [],
    numberOfUsers: 0
  }

  createUser = () => {
    createUser(this.state.user).then(response => {
      console.log(response);
      this.setState({numberOfUsers: this.state.numberOfUsers + 1});
    });
  }

  getAllUsers = () => {
    getAllUsers().then(users => {
      console.log(users);
      this.setState({users: users, numberOfUsers: users.length});
    });
  }

  onChangeForm = (e) => {
    let user = this.state.user;
    if (e.target.name === 'firstname') {
      user.firstName = e.target.value;
    } else if (e.target.name === 'lastname') {
      user.lastName = e.target.value;
    } else if (e.target.name === 'email') {
      user.email = e.target.value;
    }
    this.setState({user});
  }

  render() {
    return (
      <div className="App">
        <Header></Header>
        <main>
          <Switch>
            <Route exact path='/' component={Homepage} />
            <Route path='/sign-in' component={UserSignIn} />
            <Route path='/about-us' component={AboutUs} />
            <Route path='/set-up' component={SetUpAccount} />
            <Route path='/start-screening' component={StartScreening} />
            <Route path='/build-profile' component={BuildProfile} />
            <Route path='/dashboard' component={Dashboard} />
            <Route path='/book-an-appointment' component={CreateProfileIntercept} />
            <Route path='/activities' component={Activities} />
          </Switch>
        </main>
        <Footer/>
      </div>
      
    );
  }
}

export default App;
