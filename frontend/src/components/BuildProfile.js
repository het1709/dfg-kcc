import React from 'react';
import ChildInformation from './ChildInformation';

import avatar01 from '../assets/images/avatars/avatar-01.png';
import avatar02 from '../assets/images/avatars/avatar-02.png';
import avatar03 from '../assets/images/avatars/avatar-03.png';
import avatar04 from '../assets/images/avatars/avatar-04.png';
import avatar05 from '../assets/images/avatars/avatar-05.png';
import avatar06 from '../assets/images/avatars/avatar-06.png';
import avatar07 from '../assets/images/avatars/avatar-07.png';
import avatar08 from '../assets/images/avatars/avatar-08.png';
import avatar09 from '../assets/images/avatars/avatar-09.png';
import avatar10 from '../assets/images/avatars/avatar-10.png';
import avatar11 from '../assets/images/avatars/avatar-11.png';
import avatar12 from '../assets/images/avatars/avatar-12.png';
import avatar13 from '../assets/images/avatars/avatar-13.png';
import avatar14 from '../assets/images/avatars/avatar-14.png';
import avatar15 from '../assets/images/avatars/avatar-15.png';
import avatar16 from '../assets/images/avatars/avatar-16.png';
import avatar17 from '../assets/images/avatars/avatar-17.png';
import avatar18 from '../assets/images/avatars/avatar-18.png';
import avatar19 from '../assets/images/avatars/avatar-19.png';
import avatar20 from '../assets/images/avatars/avatar-20.png';
import avatar21 from '../assets/images/avatars/avatar-21.png';
import avatar22 from '../assets/images/avatars/avatar-22.png';
import avatar23 from '../assets/images/avatars/avatar-23.png';
import avatar24 from '../assets/images/avatars/avatar-24.png';
import powerbotSmileWave from '../assets/images/powerbots/powerbot-smiling-waving.png';

// const BuildProfile = ({ onChangeForm, BuildProfile }) => {
const BuildProfile = () => {
    return(
      <>
        <div className="row">
          <div className="col-md-10">
            <h1>Build your child's profile</h1>
            <p>Dear caregivers, the information gathering in this section will help us to suggest the most appropriate activities to your child/tween/teen. It also helps us to tailor the education material that we will send you based on your child's unique diagnosis and side effects.</p>
            <p>Medical/demographic information gathering in this section will remain confidential. Just qualified exercise professionals and Kids Cancer Care staff will have access. The information in this area won't be public and is collected under HIPPA compliance. <a href={"#"}>Learn more about HIPPA compliance.</a></p>
          </div>
          <div className="col-md-2">
            <img src={powerbotSmileWave} alt="Power bot smiling and waving" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <h2>Pick an avatar!</h2>
            <p>We will start off by building your child's profile. Select an avatar from the options below!</p>
            {/* /dashboard */}
            <div className="avatars">
              <a href={"#"}><img src={avatar01} alt="" /></a>
              <a href={"#"}><img src={avatar02} alt="" /></a>
              <a href={"#"}><img src={avatar03} alt="" /></a>
              <a href={"#"}><img src={avatar04} alt="" /></a>
              <a href={"#"}><img src={avatar05} alt="" /></a>
              <a href={"#"}><img src={avatar06} alt="" /></a>
              <a href={"#"}><img src={avatar07} alt="" /></a>
              <a href={"#"}><img src={avatar08} alt="" /></a>
              <a href={"#"}><img src={avatar09} alt="" /></a>
              <a href={"#"}><img src={avatar10} alt="" /></a>
              <a href={"#"}><img src={avatar11} alt="" /></a>
              <a href={"#"}><img src={avatar12} alt="" /></a>
              <a href={"#"}><img src={avatar13} alt="" /></a>
              <a href={"#"}><img src={avatar14} alt="" /></a>
              <a href={"#"}><img src={avatar15} alt="" /></a>
              <a href={"#"}><img src={avatar16} alt="" /></a>
              <a href={"#"}><img src={avatar17} alt="" /></a>
              <a href={"#"}><img src={avatar18} alt="" /></a>
              <a href={"#"}><img src={avatar19} alt="" /></a>
              <a href={"#"}><img src={avatar20} alt="" /></a>
              <a href={"#"}><img src={avatar21} alt="" /></a>
              <a href={"#"}><img src={avatar22} alt="" /></a>
              <a href={"#"}><img src={avatar23} alt="" /></a>
              <a href={"#"}><img src={avatar24} alt="" /></a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <h2>Child's Information</h2>
            <ChildInformation />
          </div>
        </div>
      </>
    );
}
export default BuildProfile;
