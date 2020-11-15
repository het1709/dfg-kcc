import React, { Component }  from 'react';
import UserSignIn from './UserSignIn';
import StartScreening from './StartScreening';

import './homepage.scss';

import calgaryFlamesImg from './../assets/images/foundation-logo.jpg';
import powerbotPopUp from './../assets/images/powerbots/powerbot-popup-hi.png';

class Homepage extends Component {
    state = {
        user: {},
        users: [],
        numberOfUsers: 0
    }

    createUser = () => {
        this.createUser(this.state.user).then(response => {
            console.log(response);
            this.setState({ numberOfUsers: this.state.numberOfUsers + 1 });
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
        this.setState({ user });
    }

    render() {
        return (
            <>
                <div className="row sign-in">
                    <div className="col-md-6 welcome-sign-in-header">
                        <img src={powerbotPopUp} alt="Powerbot waving hello" className="powerbot-hi" />
                        <h1>Welcome!</h1>
                    </div>
                    <div className="col-md-4"></div>
                        <img src={calgaryFlamesImg} alt="" className="flames-foundation-logo" />
                </div>
                <div className="row sign-in-contents">
                    <div className="col-md-6 col-sm-12 user-sign-in">
                        <UserSignIn />
                    </div>
                    <div className="col-md-6 start-screening-container">
                        <StartScreening />
                    </div>
                </div>
            </>
        );
    }
}

export default Homepage;
