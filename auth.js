// Import Firebase (if using modules)
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// Firebase configuration (replace with your Firebase project config)
const firebaseConfig = {
    apiKey: "AIzaSyDOyxzgbEW-whoINdBANsIAp38dVNRjBGI",
    authDomain: "goaround-4f166.firebaseapp.com",
    projectId: "goaround-4f166",
    storageBucket: "goaround-4f166.firebasestorage.app",
    messagingSenderId: "843737624621",
    appId: "1:843737624621:web:a72cb56a3295e232e288a4",
    measurementId: "G-H3R27SY08W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
