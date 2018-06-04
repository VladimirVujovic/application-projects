import React from 'react';

const UserListItem = props => (
  <div>
    <img src={props.userData.picture.thumbnail} />
    <p>name: {props.userData.name.first}</p>
    <p>email: {props.userData.email}</p>
    <p>date of birth: {props.userData.dob}</p>
  </div>
);
export default UserListItem;
