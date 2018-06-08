import {postUrl} from '../shared/constants';

class UsersService {
  getUsers = () => {
    return fetch (postUrl + 'users')
      .then (response => response.json ())
      .then (data => {
        return data.map (user => {
          return new UsersService (user.name);
        });
      });
  };
}
export default new UsersService ();
