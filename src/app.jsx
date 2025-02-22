import React, { useState } from 'react';

function App() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newPost.trim()) return;
    // 新しい投稿を配列の先頭に追加
    setPosts([{ text: newPost, id: Date.now() }, ...posts]);
    setNewPost('');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <div className="w-full max-w-md bg-white rounded-lg shadow p-4">
        <h1 className="text-xl font-bold mb-4">My Social App</h1>
        <form onSubmit={handleSubmit} className="flex mb-4">
          <input
            className="flex-1 border border-gray-300 rounded-l px-2 py-1 focus:outline-none"
            type="text"
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
            placeholder="いまどうしてる？"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-1 rounded-r hover:bg-blue-600"
          >
            投稿
          </button>
        </form>

        <ul className="space-y-2">
          {posts.map((post) => (
            <li
              key={post.id}
              className="border border-gray-200 rounded p-2 bg-blue-50"
            >
              {post.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;