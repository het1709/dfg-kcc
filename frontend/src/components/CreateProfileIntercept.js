import React from 'react';

import powerBotJoy from '../assets/images/powerbot-jumping-joy.png';
import avatarSample from '../assets/images/avatar-03.png';

const CreateProfileIntercept = ({ profileIntercept }) => {
    return(
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <h1>Welcome, [child's name!]</h1>
            <p>Thank you for filling out your profile. We need a few more pieces of detailed information from you before you can start using this website. In order to do that, please book an appointment with us so we can build the rest of your profile.</p>
            <button type="button" onClick= {(e) => profileIntercept()} className="btn btn-danger">Book an appointment with us</button>
            <p>Once approved, you will receive an email notification from us that will allow you to navigate the rest of this website. <span className="non-emphasis-bold">Thank you for your patience!</span></p>
          </div>
          <div className="row">
            <div className="col-md-2">
              <img src={avatarSample} alt="Profile avatar" className="" />
              <img src={powerBotJoy} alt="Happy powerbot jumping for joy" className="" />
            </div>
          </div>
        </div>
      </div>
    );
}
export default CreateProfileIntercept;
