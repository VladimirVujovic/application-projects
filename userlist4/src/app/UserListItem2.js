import React from 'react';

const UserListItem2 = data => (
  <div className="card col-3 divOne">
    <img
      className="card-img-top picture"
      src={data.userData.picture.large}
      alt="Card image cap"
    />
    <div className="card-body divThree">
      <p className="card-text">
        <p>{data.userData.email}</p>
        <p>Date of birth: {data.userData.dob}</p>

      </p>
    </div>

  </div>
);

export default UserListItem2;
