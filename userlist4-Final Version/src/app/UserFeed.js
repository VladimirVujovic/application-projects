import React from 'react';
import UserListItem from './UserListItem';
import UserListItem2 from './UserListItem2';

class UserFeed extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      inputText: [],
      users: [],
    };
  }
  componentDidMount () {
    fetch ('https://randomuser.me/api/?results=15')
      .then (response => response.json ())
      .then (data => {
        console.log (data);
        this.setState ({users: data.results}); //objekat je data,a result je niz. map se poziva nad nizom.
      });
  }

  handleInput = event => {
    this.setState ({inputText: event.target.value});
  };

  render () {
    return (
      <div className="container">
        <div>
          <i class="fas fa-search" />
          <input
            type="text"
            value={this.state.inputText}
            onChange={this.handleInput}
            placeholder="Search users"
          />
        </div>
        {/* const result = words.filter(word => word.length > 6); */}
        {/* {this.state.users.filter ((user,i)=>{if()} )} */}

        {this.state.users
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
                ? <UserListItem key={i} userData={userData} />
                : <UserListItem2 key={i} userData={userData} />
          )}

      </div>
    );
  }
}
export default UserFeed;
