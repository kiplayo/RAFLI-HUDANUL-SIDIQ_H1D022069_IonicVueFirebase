// src/utils/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBoE-Qcn16NfXl4ORESZJbxApS545IqDBg",
    authDomain: "vue-firebase-ff2b0.firebaseapp.com",
    projectId: "vue-firebase-ff2b0",
    storageBucket: "vue-firebase-ff2b0.firebasestorage.app",
    messagingSenderId: "497204959661",
    appId: "1:497204959661:web:5d2742e58d474b57226924"
  };

const firebase = initializeApp(firebaseConfig);
const auth = getAuth(firebase);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };