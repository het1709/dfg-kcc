import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.scss';

import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import UserSignIn from './components/UserSignIn';
import StartScreening from './components/StartScreening';
import SetUpAccount from './components/SetUpAccount';
import ChildInformation from './components/ChildInformation';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Homepage from './components/Homepage';

import { getAllUsers, createUser } from './services/UserService'

import calgaryFlamesImg from './assets/images/FOUNDATION_logo_NO_TEXT.jpg';

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
        
        {/* Sign In Page */}
        <div className="row">
          <div className="col-md-12 welcome-sign-in ">
            <h1>Welcome!</h1>
            <img src={calgaryFlamesImg} alt="" className="flames-foundation-logo" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <UserSignIn />
          </div>
          <div className="col-md-6">
            <StartScreening />
          </div>
        </div>

        {/* Account Setup Page */}
        <h1>Set up your account</h1>
        <div className="row">
          <div className="col-md-12">
            <SetUpAccount/>
          </div>
        </div>

        {/* Build child's profile */}
        <div className="row">
          <div className="col-md-12">
            <h1>Build your child's profile</h1>
            <p>Dear caregivers, the information gathering in this section will help us to suggest the most appropriate activities to your child/tween/teen. It also helps us to tailor the education material that we will send you based on your child's unique diagnosis and side effects.</p>
            <p>Medical/demographic information gathering in this section will remain confidential. Just qualified exercise professionals and Kids Cancer Care staff will have access. The information in this area won't be public and is collected under HIPPA compliance. <a href={"#"}>Learn more about HIPPA compliance.</a></p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <h2>Pick an avatar!</h2>
            <p>We will start off by building your child's profile. Select an avatar from the options below!</p>
            {/* TODO: Add Avatar component here */}
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <h2>Child's Information</h2>
            <ChildInformation />
          </div>
        </div>

        <Switch>
          <Route exact path='/' component={Homepage} />
          {/* both /roster and /roster/:number begin with /roster */}
          <Route path='/sign-in' component={UserSignIn} />
        </Switch>
        
        <Footer/>
      </div>
      
    );
  }
}

export default App;
