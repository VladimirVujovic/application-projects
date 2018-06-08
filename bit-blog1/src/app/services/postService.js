import {postUrl} from '../shared/constants';
import Post from '../entities/Post';
class PostService {
  getPost = () => {
    return fetch (postUrl + 'posts')
      .then (response => response.json ())
      .then (data => {
        return data.map (post => {
          return new Post (post.id, post.userId, post.title, post.body);
        });
      });
  };
}
export default new PostService ();
