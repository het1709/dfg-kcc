import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import Homepage from './components/Homepage';
import CreateUser from './components/CreateUser';
import {DisplayBoard} from './components/DisplayBoard';
import { Users } from './components/Users';

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
        <Switch>
          <Route exact path='/' component={Homepage} />
          {/* both /roster and /roster/:number begin with /roster */}
          <Route path='/about-us' component={DisplayBoard} />
          <Route path='/sign-in' component={CreateUser} />
        </Switch>
        
        <Footer/>
      </div>
      
    );
  }
}

export default App;
