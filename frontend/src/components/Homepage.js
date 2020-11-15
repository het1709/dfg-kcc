import React, { Component }  from 'react';
import UserSignIn from './UserSignIn';
import StartScreening from './StartScreening';

import calgaryFlamesImg from './../assets/images/FOUNDATION_logo_NO_TEXT.jpg';

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
            </>
        );
    }
}

export default Homepage;
