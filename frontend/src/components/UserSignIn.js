import React from 'react';

const UserSignIn = () => {
  return (
    <div className="container signin">
      <div className="row">
        <div className="col-md-9">
          <h2>Registered users:</h2>
          <form>
            <div className="row">
              <div className="form-group col-md-12">
                <label htmlFor="exampleInputEmail1">Email address:</label>
                <input type="text" className="form-control" name="email" id="email" aria-describedby="emailHelp" placeholder="user@domain.com" />
              </div>
            </div>
            <div className="row">
              <div className="form-group col-md-12">
                <label htmlFor="exampleInputPassword1">Password:</label>
                <input type="password" className="form-control" name="password" id="password" placeholder="" />
              </div>
            </div>
            <a href="/dashboard">
              <button type="button" className="btn btn-danger">Sign In</button>
            </a>
          </form>
        </div>
      </div>
    </div>
  );
}
export default UserSignIn;
