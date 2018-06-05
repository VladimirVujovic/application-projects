// import React from 'react';
// import usersData from './usersData';
// import UserListItem from './UserListItem';
// import UserListItem2 from './UserListItem2';
// //const ChangeFeed=()=>()
// const UserFeed = () => (
//   <div className="container">
//     {usersData.map ((userData, i) => (
//       <UserListItem2 key={i} userData={userData} />
//     ))}

//   </div>
// );

// export default UserFeed;
import React from 'react';
import usersData from './usersData';
import UserListItem from './UserListItem';
import UserListItem2 from './UserListItem2';

class UserFeed extends React.Component {
  constructor (props) {
    super (props);
    this.state = {selected: false};
  }

  clickHandler = () =>
    this.setState ((prevState, props) => {
      return {selected: !prevState.selected};
    });
  render () {
    return (
      <div className="container">

        <input
          type="button"
          className="button"
          onClick={this.clickHandler}
          value="SWITCH"
        />

        {usersData.map (
          (userData, i) =>
            this.state.selected
              ? <UserListItem key={i} userData={userData} />
              : <UserListItem2 key={i} userData={userData} />
        )}

      </div>
    );
  }
}
export default UserFeed;
