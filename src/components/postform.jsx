import React, { useState } from 'react';

function PostForm({ addPost }) {
  const [newPost, setNewPost] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addPost(newPost);
    setNewPost('');
  };

  return (
    <form className="post-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={newPost}
        onChange={(e) => setNewPost(e.target.value)}
        placeholder="今どうしてる？"
        className="post-input"
      />
      <button type="submit" className="post-button">投稿</button>
    </form>
  );
}

export default PostForm;