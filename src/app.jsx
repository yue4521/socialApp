import React, { useState } from 'react';
import { motion } from 'framer-motion';

function App() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newPost.trim()) return;
    setPosts([{ text: newPost, id: Date.now() }, ...posts]);
    setNewPost('');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-6">
      {/* コンテナ */}
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6 space-y-4">
        {/* アプリ名 */}
        <h1 className="text-2xl font-bold text-center text-gray-700">My Social App</h1>

        {/* 投稿フォーム */}
        <form onSubmit={handleSubmit} className="flex items-center space-x-2">
          <input
            className="flex-1 border border-gray-300 rounded-full px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all duration-200"
            type="text"
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
            placeholder="今どうしてる？"
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-full shadow-md hover:scale-105 transition-transform duration-200"
          >
            投稿
          </button>
        </form>

        {/* 投稿リスト */}
        <div className="space-y-3">
          {posts.map((post) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="border border-gray-200 rounded-xl p-4 bg-white shadow-md"
            >
              <p className="text-gray-800">{post.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;