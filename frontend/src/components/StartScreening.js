import React from 'react';

const StartScreening = () => {
    return (
        <div className="start-screening">
            <h3>First time here?</h3>
            <div className="row">
                <div className="form-group col-md-12">
                    <label htmlFor="emailAddress">Email Address</label>
                    <input type="text" className="form-control" name="emailaddress" id="emailaddress" aria-describedby="emailAddressInput" placeholder=" " />
                </div>
                <div className="form-group col-md-12">
                    <label htmlFor="createPassword">Create a Password (min. X characters)</label>
                    <input type="text" className="form-control" name="createPassword" id="createPassword" aria-describedby="createPasswordInput" placeholder=" " />
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <a href="/set-up">
                        <button type="button" className="btn btn-danger">Sign Up &amp; Start Screening</button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default StartScreening;
