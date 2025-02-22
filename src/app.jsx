import React, { useState } from 'react';
import PostForm from './components/postform';
import PostList from './components/postlist';
import './components/App.css'; // スタイルを適用

function App() {
  const [posts, setPosts] = useState([]);

  const addPost = (text) => {
    if (!text.trim()) return;
    setPosts([{ text, id: Date.now() }, ...posts]);
  };

  return (
    <div className="app-container">
      <div className="app-card">
        <h1 className="app-title">My Social App</h1>
        <PostForm addPost={addPost} />
        <PostList posts={posts} />
      </div>
    </div>
  );
}

export default App;