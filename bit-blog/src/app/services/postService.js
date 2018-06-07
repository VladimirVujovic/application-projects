import {postUrl} from '../shared/constants';

class PostService {
  getUsers = () => {
    return fetch (postUrl + 'posts')
      .then (response => response.json ())
      .then (data => {
        return data.map (post => {
          return new Post (post.title, post.id, post.body);
        });
      });
  };
}
export default new PostService ();
