import React from 'react';
import MorePosts from './MorePosts';
import PostService from '../services/postService';
class SinglePostTitle extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      post: {},
    };
  }

  componentDidMount () {
    PostService.getPost ().then (data => {
      this.setState ({post: data});
    });
  }

  render () {
    return (
      <div className="container">

        <h1>SINGLE POST TITLE</h1>
        <p />
        <MorePosts />
      </div>
    );
  }
}

export default SinglePostTitle;
