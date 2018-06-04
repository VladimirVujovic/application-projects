import React from 'react';

const UserListItem2 = props => (
  <div className="card col-3 divOne">
    <img
      className="card-img-top picture"
      src={props.userData.picture.large}
      alt="Card image cap"
    />
    <div className="card-body divThree">
      <p className="card-text">
        <p>{props.userData.email}</p>
        <p>Date of birth: {props.userData.dob}</p>

      </p>
    </div>

  </div>
);

export default UserListItem2;
