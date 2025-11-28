import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBkMYuJgVnWU9N1-yop8AyyTPonBZo9Pkc",
  authDomain: "coffee-christmas.firebaseapp.com",
  projectId: "coffee-christmas",
  storageBucket: "coffee-christmas.firebasestorage.app",
  messagingSenderId: "217397323044",
  appId: "1:217397323044:web:563dcfa56cf5c7a396ffb1",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
