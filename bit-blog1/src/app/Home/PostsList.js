import React from 'react';
import PostItem from './PostItem';

const PostsList = props => {
  return props.posts.map (post => {
    return <PostItem title={post.title} body={post.body} key={post.postId} />;
  });
};
export default PostsList;
