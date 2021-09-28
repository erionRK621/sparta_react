// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYBweG2Oz39Yoymdk7WRLvO8BwlKbcTiQ",
  authDomain: "sparta-react-basic-d6165.firebaseapp.com",
  projectId: "sparta-react-basic-d6165",
  storageBucket: "sparta-react-basic-d6165.appspot.com",
  messagingSenderId: "517521149517",
  appId: "1:517521149517:web:0d1e4f00d1bda416131604",
  measurementId: "G-CQNTBZE7JP",
};

initializeApp(firebaseConfig);
// Initialize Firebase
//const app = initializeApp(firebaseConfig);

export const db = getFirestore();
