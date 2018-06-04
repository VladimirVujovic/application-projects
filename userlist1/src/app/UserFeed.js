import React from 'react';
import usersData from './usersData';

const UserFeed = () => (
  <div>
    {usersData.map ((userData, i) => (
      <div key={i}>
        <img src={userData.picture.thumbnail} />
        <p>name: {userData.name.first}</p>
        <p>email: {userData.email}</p>
        <p>date of birth: {userData.dob}</p>
      </div>
    ))}
  </div>
);

export default UserFeed;
