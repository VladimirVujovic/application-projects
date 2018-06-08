import React from 'react';
import UsersService from '../services/UsersService';
import AuthorInformation from '../Authors/AuthorInformation';
class Authors extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      users: [],
    };
  }

  componentDidMount () {
    UsersService.getUsers ().then (users => {
      this.setState ({users: users});
    });
  }

  render () {
    return (
      <div className="Authors col-12">
        <h2>Authors (6)</h2>
        <AuthorInformation users={this.state.users} />
      </div>
    );
  }
}

export default Authors;
