import React, { Component }  from 'react';
import CreateUser from './CreateUser';
import { DisplayBoard } from './DisplayBoard';

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
            <div className="container">
                <div className="row">
                <div className="col-md-8">
                    <CreateUser 
                        user={this.state.user}
                        onChangeForm={this.onChangeForm}
                        createUser={this.createUser}
                        >
                    </CreateUser>
                </div>
                <div className="col-md-4">
                    <DisplayBoard
                        numberOfUsers={this.state.numberOfUsers}
                    >
                    </DisplayBoard>
                </div>
                </div>
            </div>
        );
    }
}

export default Homepage;
