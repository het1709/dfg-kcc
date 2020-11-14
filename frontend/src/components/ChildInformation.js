import React from 'react';

const ChildInformation = ({ onChangeForm, childInformation }) => {
    return(
        <div className="container">
          <form>
            <div className="row">
              <div className="form-group col-md-6">
                <label htmlFor="childFirstName">Child's First Name</label>
                <input type="text" onChange={(e) => onChangeForm(e)}  className="form-control" name="childfirstname" id="childfirstname" aria-describedby="childFirstName" placeholder=" " />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="childLastName">Child's Last Name</label>
                <input type="text" onChange={(e) => onChangeForm(e)} className="form-control" name="childlastname" id="childlastname" placeholder=" " />
              </div>
            </div>
            <div className="row">
              <div className="form-group col-md-6">
                <label htmlFor="childNickname">Child's Nickname (optional)</label>
                <input type="text" onChange={(e) => onChangeForm(e)} className="form-control" name="childnickname" id="childnickname" aria-describedby="childNicknameInput" placeholder=" " />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="addressCity">Date of Birth (DD/MM/YYY)</label>
                <input type="text" onChange={(e) => onChangeForm(e)} className="form-control" name="addresscity" id="addresscity" aria-describedby="addressCityInput" placeholder=" " />
              </div>
            </div>
            <div className="row">
              <div className="form-group col-md-6">
                <label htmlFor="childNickname">Gender</label>
                <input type="text" onChange={(e) => onChangeForm(e)} className="form-control" name="childngender" id="childgender" aria-describedby="childGenderInput" placeholder=" " />
              </div>
            </div>
            <div className="row">
              {/* TODO: Add progress bar */}
              <button type="button" onClick= {(e) => childInformation()} className="btn btn-danger">Continue</button>
            </div>
          </form>
        </div>
    );
}
export default ChildInformation;
