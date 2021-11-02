import React from 'react';
import dummyData from '../../dummy-data';
import Post from './Post';
import PostHeader from './PostHeader';
import './Posts.css';

const Posts = (props) => {
  // 🔥 Make sure the parent of Posts is passing the right props!
  const { likePost, posts } = props;
  return (
    <div className='posts-container-wrapper'>
      {/* Map through the posts array returning a Post component at each iteration */}
      {posts.map((_, index) => {
        return <Post key={index} likePost={likePost} post={posts} />
      })}
      {/* Check the implementation of Post to see what props it requires! */}
      {posts.map((post, index) => {
        return <PostHeader key={index} thumbnailUrl={post.thumbnailUrl} post={posts} />
      })}
    </div>
  );
};

export default Posts;
