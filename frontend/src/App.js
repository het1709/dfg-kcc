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
