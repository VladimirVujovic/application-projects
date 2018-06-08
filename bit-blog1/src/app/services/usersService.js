import {postUrl} from '../shared/constants';
import Users from '';
class UsersService {
  getUsers = () => {
    return fetch (postUrl + 'users')
      .then (response => response.json ())
      .then (data => {
        return data.map (user => {
          return new Users (user.name);
        });
      });
  };
}
export default new UsersService ();
