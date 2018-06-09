import React from 'react';
import {Link} from 'react-router-dom';
import PostService from '../services/postService';

class SinglePostTitle extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      post: {},
      userPosts: [],
    };
  }

  componentWillReceiveProps = nextProps => {
    const postId = nextProps.match.params.id;

    this.fetchPageData (postId);

    // PostService.getPost (postId)
    //   .then (post => this.setState ({post}))
    //   .then (() => PostService.getUserPosts (this.state.post.userId))
    //   .then (userPosts => this.setState ({userPosts}));
  };

  componentDidMount () {
    const postId = this.props.match.params.id;

    this.fetchPageData (postId);
  }

  fetchPageData = postId => {
    PostService.getPost (postId)
      .then (post => this.setState ({post}))
      .then (() => PostService.getUserPosts (this.state.post.userId))
      .then (userPosts => this.setState ({userPosts}));
  };

  render () {
    return (
      <div className="container authorTitle">
        <h1>{this.state.post.title}</h1>
        <p className="post">{this.state.post.body}</p>

        {this.state.userPosts.map (post => (
          <div className="links">
            <Link to={`/post/${post.id}`}>{post.title}</Link>
          </div>
        ))}
      </div>
    );
  }
}

export default SinglePostTitle;
