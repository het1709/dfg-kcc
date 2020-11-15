import React from 'react';

import powerBotJoy from '../assets/images/powerbots/powerbot-jumping-joy.png';
import avatarSample from '../assets/images/avatars/avatar-03.png';

const CreateProfileIntercept = ({ profileIntercept }) => {
    return(
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <h1>Welcome, Cody!</h1>
            <p>Thank you for filling out your profile. We need a few more pieces of detailed information from you before you can start using this website. In order to do that, please book an appointment with us so we can build the rest of your profile.</p>
            <a href="https://calendly.com/power-movement" target="_blank">
              <button type="button" className="btn btn-danger booking">Book an appointment with us</button>
            </a>
            <p>Once approved, you will receive an email notification from us that will allow you to navigate the rest of this website. <span className="non-emphasis-bold">Thank you for your patience!</span></p>
          </div>
            <div className="col-md-5 monster">
              <img src={avatarSample} alt="Green monster holding a heart" className="" />
            </div>
        </div>
        <div className="row robot">
            <img src={powerBotJoy} alt="Happy powerbot jumping for joy" className="" />
        </div>
      </div>
    );
}
export default CreateProfileIntercept;
