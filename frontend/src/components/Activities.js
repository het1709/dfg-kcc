import React from 'react';

import './activities.scss';

import avatarSample from '../assets/images/avatars/avatar-03.png';

const Activities = () => {
    return(
        <div className="container">
            <div className="row">
              <div className="col-md-7 heading-left-side">
                <div className="child-profile">
                  <img src={avatarSample} alt="Green monster holding a heart avatar" className="" />
                  <div className="profile-info-with-edit-link">
                      <p className="non-emphasis-bold">Cody</p>
                      <p><a href="/build-profile">Edit Profile</a></p>
                  </div>
                </div>
                <h1>Ready to exercise?</h1>
                <p>Try the following exercises that we picked just for you!</p>
              </div>
              <div className="col-md-5 heading-right-side">
                <p>If something changes in your treatment/symptoms health, please let us know!</p>
                <a href="https://calendly.com/power-movement" target="_blank">
                  <button type="button" className="btn btn-danger">Book an appointment</button>
                </a>
              </div>
            </div>  
            <div className="row exercise1">
              <div className="col-md-6 video-iframe">
                <h2 className="red-text">Song and Dance</h2>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/Cg-wnQKRHTs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
              <div className="col-md-6 activity-content">
                <p className="non-emphasis-bold">Recommended Age: <span className="red-text">Pre-school</span></p>
                <p className="non-emphasis-bold">Intensity: <span className="red-text">Moderate</span></p>
                <p><strong>Description</strong></p>
                <p>Play your child's favourite music and dance for 5 minutes or try dancing along to the song.</p>
                <p><strong>Instructions</strong></p>
                <p>Play the video to start exercising!</p>
              </div>
              </div>
            <div className="row exercise2">
              <div className="col-md-6 video-iframe">
                <h2 className="red-text">Movement Cards</h2>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/PQOeacu0tfU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
              <div className="col-md-6 activity-content">
                <p className="non-emphasis-bold">Recommended Age: <span className="red-text">Pre-school, School</span></p>
                <p className="non-emphasis-bold">Intensity: <span className="red-text">Moderate</span></p>
                <p><strong>Description</strong></p>
                <p>Make a set of cards that read: Jump, Turn, Crouch, Wiggle, and Balance</p>
                <p><strong>Instructions</strong></p>
                <p>Read them out to your child like flashcards, have them do each action for 5-10 seconds. Play any kind of music! Go through the set for as long/little as you like, mixing up the order. For example: Jump, Crouch, Jump, Balance, Wiggle, Turn, Jump, Crouch, Wiggle, Balance.</p>
                <p>Variation: link a colour with an action (example: jump = red; crouch = green; balance = blue). Show them a colour and then they need to remember the action.</p>
              </div>
              
            </div>  
        </div>
    );
}
export default Activities;
