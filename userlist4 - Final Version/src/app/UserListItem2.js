import React from 'react';

const UserListItem2 = data => (
  <div
    className="col-sm-3 card  divOne"
    id={data.userData.gender.includes ('female') ? 'changeColor' : ''}
  >
    <img
      className="card-img-top picture"
      src={data.userData.picture.large}
      alt="Card image cap"
    />
    <div className="card-body divThree">
      <p className="card-text">
        <p>{data.userData.email}</p>
        <p>Birth of date: {data.userData.dob.slice (0, 10)}</p>

      </p>
    </div>

  </div>
);

export default UserListItem2;
