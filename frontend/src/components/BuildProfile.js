import React from 'react';
import ChildInformation from './ChildInformation';

// const BuildProfile = ({ onChangeForm, BuildProfile }) => {
const BuildProfile = () => {
    return(
      <>
        <div className="row">
          <div className="col-md-12">
            <h1>Build your child's profile</h1>
            <p>Dear caregivers, the information gathering in this section will help us to suggest the most appropriate activities to your child/tween/teen. It also helps us to tailor the education material that we will send you based on your child's unique diagnosis and side effects.</p>
            <p>Medical/demographic information gathering in this section will remain confidential. Just qualified exercise professionals and Kids Cancer Care staff will have access. The information in this area won't be public and is collected under HIPPA compliance. <a href={"#"}>Learn more about HIPPA compliance.</a></p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <h2>Pick an avatar!</h2>
            <p>We will start off by building your child's profile. Select an avatar from the options below!</p>
            {/* /dashboard */}
            {/* TODO: Add Avatar component here */}
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
