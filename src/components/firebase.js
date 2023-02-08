// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDc6e_UOVlXWbv3geSHOWNHgnML6OHiKP0",
  authDomain: "portfolio-e0de0.firebaseapp.com",
  projectId: "portfolio-e0de0",
  storageBucket: "portfolio-e0de0.appspot.com",
  messagingSenderId: "767006822418",
  appId: "1:767006822418:web:6dc1bc71355a7cc9e888cb",
  measurementId: "G-01YE2YS75Z",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
