import React from 'react';
class Authors extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      users: [],
    };
  }

  componentDidMount () {
    PostService.getUsers ().then (users => {
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
