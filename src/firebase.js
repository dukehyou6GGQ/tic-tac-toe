import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // for real-time game data

const firebaseConfig = {
  apiKey: "AIzaSyCyUoXvLipwuowwMa3lDGueI-SjJLs5-k0",
  authDomain: "ttt-game-df5b8.firebaseapp.com",
  projectId: "ttt-game-df5b8",
  storageBucket: "ttt-game-df5b8.appspot.com",
  messagingSenderId: "1090440790025",
  appId: "1:1090440790025:web:91b780d422009c21f738d8"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // this is what you’ll use for multiplayer data

export { app, db };