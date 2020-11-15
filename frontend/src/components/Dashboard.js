import React from 'react';

import './dashboard.scss';

import avatarSample from '../assets/images/avatars/avatar-03.png';
import powerbotLowEnergy from '../assets/images/powerbots/powerbot-battery-low.png';
import powerbotSitting from '../assets/images/powerbots/powerbot-smiling-sitting.png';
import powerbotRunning from '../assets/images/powerbots/powerbot-running.png';
import powerbotConfused from '../assets/images/powerbots/powerbot-confused.png';
import powerbotRecharging from '../assets/images/powerbots/powerbot-recharging.png';
import powerbotFaceSmile from '../assets/images/powerbots/powerbot-face-smile.png';
import powerbotFaceMeh from '../assets/images/powerbots/powerbot-face-meh.png';
import powerbotFaceAngry from '../assets/images/powerbots/powerbot-face-angry.png';

export const Dashboard = () => {
    return (
        <div className="dashboard container">
            <div className="row">
                <div className="col-md-6 child-profile">
                    <img src={avatarSample} alt="Green monster holding a heart avatar" className="" />
                    <div className="profile-info-with-edit-link">
                        <p className="non-emphasis-bold">Cody</p>
                        <p><a href="/build-profile">Edit Profile</a></p>
                    </div>
                </div>
                <div className="col-md-6 welcome-message">
                    {/* TODO: dynamically replace with child's nickname */}
                    <h1>Welcome Back, Cody!</h1>
                </div>
            </div>
            
            <div className="row">
                <div className="col-md-12 energy">
                    <p><span className="non-emphasis-bold">1. What is your energy level today?</span></p>
                    <div className="energy-inputs">
                        <label htmlFor="lowEnergyInput">Low</label>
                        <input type="checkbox" className="form-control" name="lowEnergyInput" id="lowenergy" aria-describedby="lowEnergyCheckbox" />
                        <label htmlFor="mediumEnergyInput">Medium</label>
                        <input type="checkbox" className="form-control" name="mediumEnergyInput" id="mediumenergy" aria-describedby="mediumEnergyCheckbox" />
                        <label htmlFor="highEnergyInput">High</label>
                        <input type="checkbox" className="form-control" name="highEnergyInput" id="highenergy" aria-describedby="highEnergyCheckbox" />
                    </div>
                    <div className="energy-images">    
                        <img src={powerbotLowEnergy} alt="Low energy Powerbot" />
                        <img src={powerbotSitting} alt="Medium energy Powerbot" />
                        <img src={powerbotRunning} alt="High energy Powerbot" />
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-12 platelet">
                    <p><span className="non-emphasis-bold">2. What is your platelet level?</span> Check in with your parents if you are unsure.</p>
                    <div className="energy-inputs">
                        <label htmlFor="lowPlateletInput">Low</label>
                        <input type="checkbox" className="form-control" name="lowPlatletInput" id="lowplatelet" aria-describedby="lowPlateletCheckbox" />
                        <label htmlFor="unsurePlateletInput">Unsure</label>
                        <input type="checkbox" className="form-control" name="unsurePlateletInput" id="unsureplatelet" aria-describedby="unsurePlateletCheckbox" />
                        <label htmlFor="normalPlateletInput">Normal</label>
                        <input type="checkbox" className="form-control" name="normalPlateletInput" id="normalplatelet" aria-describedby="normalPlateletCheckbox" />
                    </div>
                    <div className="energy-images">
                        <img src={powerbotLowEnergy} alt="Powerbot with low energy" />
                        <img src={powerbotConfused} alt="Confused/Unsure Powerbot" />
                        <img src={powerbotRecharging} alt="Powerbot recharging" />
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-12 pain">
                    <p><span className="non-emphasis-bold">2. What is your platelet level?</span> Check in with your parents if you are unsure.</p>
                    <div className="energy-inputs">
                        <label htmlFor="yesPainInput">Yes</label>
                        <input type="checkbox" className="form-control" name="yesPainInput" id="yespain" aria-describedby="yesPainCheckbox" />
                        <label htmlFor="unsurePainInput">Unsure</label>
                        <input type="checkbox" className="form-control" name="unsurePainInput" id="unsurepain" aria-describedby="unsurePainCheckbox" />
                        <label htmlFor="noPainInput">No</label>
                        <input type="checkbox" className="form-control" name="noPainInput" id="nopain" aria-describedby="noPainCheckbox" />
                    </div>
                    <div className="energy-images-faces">
                        <img src={powerbotFaceAngry} alt="Angry powerbot face" />
                        <img src={powerbotFaceMeh} alt="Unsure/confused Powerbot face" />
                        <img src={powerbotFaceSmile} alt="Happy Powerbot face" />
                    </div>
                </div>
            </div>

            <div classname="row">
                <div className="col-md-12 where-exercise">
                    <p><span className="non-emphasis-bold">4. Where would you like to exercise today?</span></p>
                    <div className="where-exercise-inputs">
                        <label htmlFor="exerciseIndoorsInput">Indoors</label>
                        <input type="checkbox" className="form-control" name="indoorexercise" id="indoor" aria-describedby="indoorExerciseCheckbox" />
                        <label htmlFor="exerciseOutdoorsInput">Outdoors</label>
                        <input type="checkbox" className="form-control" name="outdoorexercise" id="outdoor" aria-describedby="exerciseOutdoorsInput" />
                        <label htmlFor="exerciseHospitalInput">In hospital</label>
                        <input type="checkbox" className="form-control" name="hospitalexercise" id="hospital" aria-describedby="hospitalExerciseInput" />
                    </div>
                </div>
            </div>
            <a href="/activities">
                <button type="button" className="btn btn-danger">Let's get started!</button>
            </a>
        </div>
    );
}
