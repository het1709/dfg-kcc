import React from 'react';

import './setup-account.scss';

import powerBotPhone from '../assets/images/powerbots/powerbot-smiling-phone.png';

const SetUpAccount = ({ onChangeForm, setUpAccount }) => {
    return(
      <>
        <div className="container">
          <div className="row">
            <div className="col-md-12 setup-account-header">
              <h1>Set up your account</h1>
              <img src={powerBotPhone} alt="Power bot smiling and looking at phone" />
            </div>
          </div>
          <form>
              <div className="row">
                <div className="form-group col-md-6">
                    <label htmlFor="parentFirstName">Parent's First Name</label>
                    <input type="text" onChange={(e) => onChangeForm(e)}  className="form-control" name="firstname" id="firstname" aria-describedby="emailHelp" placeholder=" " />
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="parentLastName">Parent's Last Name</label>
                    <input type="text" onChange={(e) => onChangeForm(e)} className="form-control" name="parentlastname" id="parentlastname" placeholder=" " />
                </div>
            </div>
            <div className="row">
              <div className="form-group col-md-6">
                  <label htmlFor="streetAddress">Address</label>
                  <input type="text" onChange={(e) => onChangeForm(e)} className="form-control" name="streetaddress" id="streetaddress" aria-describedby="streetAddressInput" placeholder=" " />
              </div>
              <div className="form-group col-md-6">
                  <label htmlFor="addressCity">City</label>
                  <input type="text" onChange={(e) => onChangeForm(e)} className="form-control" name="addresscity" id="addresscity" aria-describedby="addressCityInput" placeholder=" " />
              </div>
            </div>
            <div className="row">
              <div className="form-group col-md-6">
                  <label htmlFor="addressCountry">Country</label>
                  <input type="text" onChange={(e) => onChangeForm(e)} className="form-control" name="addresscountry" id="addresscountry" aria-describedby="addressCountryInput" placeholder=" " />
              </div>
              <div className="form-group col-md-6">
                  <label htmlFor="phoneNumber">Phone Number (ex: 403-555-1234)</label>
                  <input type="text" onChange={(e) => onChangeForm(e)} className="form-control" name="phonenumber" id="phonenumber" aria-describedby="phoneNumberInput" placeholder="xxx-xxx-xxxx" />
              </div>
            </div>
            <div className="row">
              <div className="form-group col-md-6">
                  <label htmlFor="emailAddress">Email Address</label>
                  <input type="text" onChange={(e) => onChangeForm(e)} className="form-control" name="emailaddress" id="emailaddress" aria-describedby="emailAddressInput" placeholder=" " />
              </div>
            </div>
            <div className="row">
              <div className="form-group col-md-6">
                  <label htmlFor="createPassword">Password (min. X characters)</label>
                  <input type="text" onChange={(e) => onChangeForm(e)} className="form-control" name="createPassword" id="createPassword" aria-describedby="createPasswordInput" placeholder=" " />
              </div>
              <div className="form-group col-md-6">
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <input type="text" onChange={(e) => onChangeForm(e)} className="form-control" name="confirmpassword" id="confirmPassword" aria-describedby="confirmPasswordInput" placeholder=" " />
              </div>
            </div>
            <div className="row">
              <p><a href={"/"} title="Back to previous page">Back</a></p>
            <a href="/build-profile">
              <button type="button" onClick={(e) => setUpAccount()} className="btn btn-danger">Continue</button>
            </a>
            </div>
          </form>
        </div>
      </>
    );
}
export default SetUpAccount;
