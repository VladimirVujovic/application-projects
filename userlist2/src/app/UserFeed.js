import React from 'react';
import usersData from './usersData';
import UserListItem from './UserListItem';
import UserListItem2 from './UserListItem2';
const UserFeed = () => (
  <div className="container">
    {usersData.map ((userData, i) => (
      <UserListItem2 key={i} userData={userData} />
    ))}

  </div>
);

export default UserFeed;
