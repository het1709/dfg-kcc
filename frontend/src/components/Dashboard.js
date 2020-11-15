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
                <div className="col-md-12 welcome-message">
                    {/* TODO: dynamically replace with child's nickname */}
                    <h1>Welcome Back, Cody!</h1>
                    <div className="child-profile">
                        <img src={avatarSample} alt="Green monster holding a heart avatar" className="" />
                        <div className="profile-info-with-edit-link">
                            <p className="non-emphasis-bold">Cody</p>
                            <p><a href="/build-profile">Edit Profile</a></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <form>
                        <p><span className="non-emphasis-bold">1. What is your energy level today?</span></p>
                        <div className="range-slider round" data-slider>
                            <span className="range-slider-handle" role="slider" tabindex="0"></span>
                            <span className="range-slider-active-segment"></span>
                            <input type="hidden" />
                        </div>
                        <img src={powerbotLowEnergy} alt="" />
                        <img src={powerbotSitting} alt="" />
                        <img src={powerbotRunning} alt="" />
                        <label htmlFor="lowEnergyInput">Low</label>
                        <input type="checkbox" className="form-control" name="lowEnergyInput" id="lowenergy" aria-describedby="lowEnergyCheckbox" />
                        <label htmlFor="mediumEnergyInput">Medium</label>
                        <input type="checkbox" className="form-control" name="mediumEnergyInput" id="mediumenergy" aria-describedby="mediumEnergyCheckbox" />
                        <label htmlFor="highEnergyInput">High</label>
                        <input type="checkbox" className="form-control" name="highEnergyInput" id="highenergy" aria-describedby="highEnergyCheckbox" />

                        <p><span className="non-emphasis-bold">2. What is your platelet level?</span> Check in with your parents if you are unsure.</p>
                        <img src={powerbotLowEnergy} alt="" />
                        <img src={powerbotConfused} alt="" />
                        <img src={powerbotRecharging} alt="" />
                        <label htmlFor="lowPlatletInput">Low</label>
                        <input type="checkbox" className="form-control" name="lowPlatletInput" id="lowplatlet" aria-describedby="lowPlatletCheckbox" />
                        <label htmlFor="unsurePlatletInput">Unsure</label>
                        <input type="checkbox" className="form-control" name="unsurePlatletInput" id="unsureplatlet" aria-describedby="unsurePlatletCheckbox" />
                        <label htmlFor="normalPlatletInput">Normal</label>
                        <input type="checkbox" className="form-control" name="normalPlatletInput" id="normalplatlet" aria-describedby="normalPlatletCheckbox" />

                        <p><span className="non-emphasis-bold">3. Do you feel any pain today?</span></p>
                        <img src={powerbotFaceAngry} alt="" />
                        <img src={powerbotFaceMeh} alt="" />
                        <img src={powerbotFaceSmile} alt="" />
                        <label htmlFor="yesPainInput">Yes</label>
                        <input type="checkbox" className="form-control" name="yesPainInput" id="yespain" aria-describedby="yesPainCheckbox" />
                        <label htmlFor="unsurePainInput">Unsure</label>
                        <input type="checkbox" className="form-control" name="unsurePainInput" id="unsurepain" aria-describedby="unsurePainCheckbox" />
                        <label htmlFor="noPainInput">No</label>
                        <input type="checkbox" className="form-control" name="noPainInput" id="nopain" aria-describedby="noPainCheckbox" />

                        <p><span className="non-emphasis-bold">4. Where would you like to exercise today?</span></p>
                        <label htmlFor="exerciseIndoorsInput">Indoors</label>
                        <input type="checkbox" className="form-control" name="indoorexercise" id="indoor" aria-describedby="indoorExerciseCheckbox" />
                        <label htmlFor="exerciseOutdoorsInput">Outdoors</label>
                        <input type="checkbox" className="form-control" name="outdoorexercise" id="outdoor" aria-describedby="exerciseOutdoorsInput" />
                        <label htmlFor="exerciseHospitalInput">In hospital</label>
                        <input type="checkbox" className="form-control" name="hospitalexercise" id="hospital" aria-describedby="hospitalExerciseInput" />
                        <a href="/activities">
                            <button type="button" className="btn btn-danger">Let's get started!</button>
                        </a>
                    </form>
                </div>
            </div>
        </div>
    );
}
