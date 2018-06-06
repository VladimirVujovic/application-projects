import React from 'react';
import UserListItem from '../UserListItem';
import UserListItem2 from '../UserListItem2';

class UserFeed extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      inputText: [],
    };
  }

  handleInput = event => {
    this.setState ({inputText: event.target.value});
  };

  render () {
    return (
      <div className="container">
        <div>
          <i className="fas fa-search" />
          <input
            type="text"
            value={this.state.inputText}
            onChange={this.handleInput}
            placeholder="Search users"
          />
        </div>
        {this.props.users
          .filter ((userData, i) => {
            if (
              userData.name.first.includes (this.state.inputText) ||
              userData.name.last.includes (this.state.inputText)
            ) {
              return true;
            } else return false;
          })
          .map (
            (userData, i) =>
              this.props.show
                ? <UserListItem2 key={i} userData={userData} />
                : <UserListItem key={i} userData={userData} />
          )}

      </div>
    );
  }
}
export default UserFeed;

// userData.name.title.includes(miss)
