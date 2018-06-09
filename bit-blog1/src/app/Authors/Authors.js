import React from 'react';
import UsersService from '../services/UsersService';
import AuthorsLink from './AuthorsLink';
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
      <div className="container">
        <div className="titleBlog col-8 offset-4">
          <h2>Authors (6)</h2>

        </div>
        <AuthorsLink users={this.state.users} />
      </div>
    );
  }
}

export default Authors;

// import React from 'react';
// import UsersService from '../services/UsersService';
// import AuthorInformation from '../Authors/AuthorInformation';
// class Authors extends React.Component {
//   constructor (props) {
//     super (props);
//     this.state = {
//       users: [],
//     };
//   }

//   componentDidMount () {
//     UsersService.getUsers ().then (users => {
//       this.setState ({users: users});
//     });
//   }

//   render () {
//     return (
//       <div className="Authors col-12 authors">
//         <h1>Authors (6)</h1>
//         <AuthorInformation users={this.state.users} />
//       </div>
//     );
//   }
// }

// export default Authors;
