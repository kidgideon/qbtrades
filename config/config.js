// firebase.js
import { initializeApp } from "firebase/app";

// Optional: import only what you need
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Firebase config object
const firebaseConfig = {
  apiKey: "AIzaSyCNAo1ui6AKIId8mhfGVBUnECoiGgirF4Q",
  authDomain: "qbtrades-official.firebaseapp.com",
  projectId: "qbtrades-official",
  storageBucket: "qbtrades-official.firebasestorage.app",
  messagingSenderId: "513051608262",
  appId: "1:513051608262:web:3f75119de2fdf89ea5c3c7",
  measurementId: "G-T5ZQZ942M6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;

