// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDyW1i7uC98VCPTMNJ_yRI_USnMaQ7egJM",
  authDomain: "nextstudy-f53b1.firebaseapp.com",
  projectId: "nextstudy-f53b1",
  storageBucket: "nextstudy-f53b1.appspot.com",
  messagingSenderId: "353036163339",
  appId: "1:353036163339:web:8d8f5aab2bfb8f493eea0e",
  measurementId: "G-JD96MLXDVX"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);