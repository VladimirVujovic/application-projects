import {postUrl} from '../shared/constants';
import Post from '../entities/Post';
class PostService {
  getPosts = () => {
    return fetch (postUrl + 'posts')
      .then (response => response.json ())
      .then (data => {
        return data.map (post => {
          return new Post (post.id, post.userId, post.title, post.body);
        });
      });
  };

  getPost = id => {
    return fetch (postUrl + 'posts/' + id)
      .then (response => response.json ())
      .then (data => {
        return new Post (data.id, data.userId, data.title, data.body);
      });
  };
}
export default new PostService ();
