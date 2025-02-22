import React from 'react';
import PostItem from './postitem';

function PostList({ posts }) {
  return (
    <div className="post-list">
      {posts.map((post) => (
        <PostItem key={post.id} text={post.text} />
      ))}
    </div>
  );
}

export default PostList;