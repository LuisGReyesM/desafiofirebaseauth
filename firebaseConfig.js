// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfvNvUILHKu2ru2nvPFTz5XNmQKnalQ-U",
  authDomain: "desafiofirebaseauth.firebaseapp.com",
  projectId: "desafiofirebaseauth",
  storageBucket: "desafiofirebaseauth.firebasestorage.app",
  messagingSenderId: "425675952391",
  appId: "1:425675952391:web:eb4d4167163fbf5be335a2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;