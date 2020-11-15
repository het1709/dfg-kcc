import React, { Component } from 'react';
import './header.scss';

class Header extends Component {
    state = {
        hamburgerOpen: false
    }

    render() {
        return (
            <div className="header">
                <h1>POWER Movement</h1>
                    <div class="title-bar hamburger" data-responsive-toggle="example-animated-menu" data-hide-for="medium" >
                    <button class="menu-icon" type="button" data-toggle onClick={() => { (this.state.hamburgerOpen) ? this.setState({ hamburgerOpen: false }) : this.setState({hamburgerOpen: true})} }>
                        <h4 class="title-bar-title">Menu</h4>
                    </button>
                    </div>

                {this.state.hamburgerOpen && (
                <div class="hamburger-open hamburger" id="example-animated-menu" data-animate="hinge-in-from-top spin-out">
                    <div class="top-bar-left">
                        <button class="menu-icon" type="button" data-toggle onClick={() => { (this.state.hamburgerOpen) ? this.setState({ hamburgerOpen: false }) : this.setState({ hamburgerOpen: true }) }}>
                            <h4 class="title-bar-title">Menu</h4>
                        </button>
                        <ul class="dropdown menu vertical" data-dropdown-menu>
                            <li class="menu-text"><a href="/">Homepage</a></li>
                            <li class="menu-text"><a href="/about-us">About us</a></li>
                            <li class="menu-text"><a href="/sign-in">Sign In</a></li>
                        </ul>
                    </div>
                </div>
                )}

                <div class="desktop-bar">
                    <h4 class="title-bar-title">Menu</h4>
                    <ul class="dropdown menu vertical" data-dropdown-menu>
                        <li class="menu-text"><a href="/">Homepage</a></li>
                        <li class="menu-text"><a href="/about-us">About us</a></li>
                        <li class="menu-text"><a href="/sign-in">Sign In</a></li>
                        {/* <li class="menu-text"><a href="/set-up">Set Up Account</a></li> */}
                        {/* <li class="menu-text"><a href="/start-screening">Start Screening</a></li> */}
                        {/* <li class="menu-text"><a href="/build-profile">BuildProfile</a></li>
                        <li class="menu-text"><a href="/dashboard">Dashboard</a></li> */}
                        {/* <li class="menu-text"><a href="/todo">todo</a></li> */}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Header;
