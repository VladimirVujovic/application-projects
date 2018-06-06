import React from 'react';

const UserListItem = data => (
  <div>
    <img src={data.userData.picture.thumbnail} />
    <p>name: {data.userData.name.first}</p>
    <p>email: {data.userData.email}</p>
    <p>Birth od date: {data.userData.dob.slice (0, 10)}</p>
  </div>
);
export default UserListItem;
