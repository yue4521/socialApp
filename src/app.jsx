import React, { useState, useEffect } from 'react';
import { db, collection, addDoc, onSnapshot } from './firebase';
import PostForm from './components/postform';
import PostList from './components/postlist';

function App() {
  const [posts, setPosts] = useState([]);

  // Firestore から投稿データを取得（リアルタイム更新）
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "posts"), (snapshot) => {
      setPosts(snapshot.docs.map(doc => ({ id: doc.id, text: doc.data().text })));
    });

    return () => unsubscribe(); // クリーンアップ
  }, []);

  // Firestore に投稿を追加
  const addPost = async (text) => {
    if (!text.trim()) return;
    await addDoc(collection(db, "posts"), { text });
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