import React from 'react';
import UserListItem from './UserListItem';
import UserListItem2 from './UserListItem2';

class UserFeed extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      selected: false,
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

  clickHandler = () =>
    this.setState ((prevState, props) => {
      return {selected: !prevState.selected};
    });
  render () {
    return (
      <div className="container">
        <div>
          <input
            type="button"
            className="button"
            onClick={this.clickHandler}
            value="SWITCH"
          />
        </div>
        {this.state.users.map (
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
