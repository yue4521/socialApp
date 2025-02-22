import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, onSnapshot } from 'firebase/firestore';

// Firebase 設定（Firebase Console で取得したものに置き換える）
const firebaseConfig = {
    apiKey: "AIzaSyB9dvwcuC_MaqxDyAZpeINq3we_U9c149M",
    authDomain: "firestore-test-1d1e6.firebaseapp.com",
    projectId: "firestore-test-1d1e6",
    storageBucket: "firestore-test-1d1e6.firebasestorage.app",
    messagingSenderId: "784654277393",
    appId: "1:784654277393:web:a338cb830ea1cb9b784ab0",
    measurementId: "G-1X4VL2YK5C"
  };  

// Firebase 初期化
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc, onSnapshot };