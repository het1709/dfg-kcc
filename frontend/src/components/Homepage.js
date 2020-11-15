import React, { Component }  from 'react';
import UserSignIn from './UserSignIn';
import StartScreening from './StartScreening';

import './homepage.scss';

import calgaryFlamesImg from './../assets/images/foundation-logo.jpg';
import powerbotPopUp from './../assets/images/powerbots/powerbot-popup-hi.png';

class Homepage extends Component {
    render() {
        return (
            <>
                <div className="row sign-in">
                    <div className="col-md-6 welcome-sign-in-header">
                        <img src={powerbotPopUp} alt="Powerbot waving hello" className="powerbot-hi" />
                        <h1>Welcome!</h1>
                    </div>
                    <div className="col-md-4"></div>
                        <a href="https://calgaryflamesfoundation.com/" target="_blank" title="Link goes to Calgary Flames Foundation website">
                            <img src={calgaryFlamesImg} alt="Calgary Flames Foundation" className="flames-foundation-logo" />
                        </a>
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
