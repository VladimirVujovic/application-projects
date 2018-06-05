import React from 'react';

const UserListItem = data => (
  <div>
    <img src={data.userData.picture.thumbnail} />
    <p>name: {data.userData.name.first}</p>
    <p>email: {data.userData.email}</p>
    <p>date of birth: {data.userData.dob}</p>
  </div>
);
export default UserListItem;
