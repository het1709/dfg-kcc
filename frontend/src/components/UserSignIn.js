import React from 'react';

const UserSignIn = ({ onChangeForm, userSignIn }) => {
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-7 mrgnbtm">
                <h2>Registered users:</h2>
                <form>
                  <div className="row">
                    <div className="form-group col-md-6">
                      <label htmlFor="exampleInputEmail1">Email address:</label>
                      <input type="text" onChange={(e) => onChangeForm(e)} className="form-control" name="email" id="email" aria-describedby="emailHelp" placeholder="user@domain.com" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group col-md-6">
                      <label htmlFor="exampleInputPassword1">Password:</label>
                      <input type="text" onChange={(e) => onChangeForm(e)} className="form-control" name="password" id="password" placeholder="" />
                    </div>
                  </div>
                  <button type="button" onClick= {(e) => userSignIn()} className="btn btn-danger">Sign In</button>
                </form>
              </div>
            </div>
        </div>
    );
}
export default UserSignIn;
