// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAE0M6DLuDp6grDcrdSuvtHFAZQEgHUU70",
  authDomain: "netflixgpt-2ba2a.firebaseapp.com",
  projectId: "netflixgpt-2ba2a",
  storageBucket: "netflixgpt-2ba2a.firebasestorage.app",
  messagingSenderId: "881554555128",
  appId: "1:881554555128:web:dfdb07886f487d010a3b0d",
  measurementId: "G-073G30RL0X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();