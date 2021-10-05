import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCLgW5L9V4BFeO-__duiCWq8LcVDGV11zk",
  authDomain: "image-community-81e27.firebaseapp.com",
  projectId: "image-community-81e27",
  storageBucket: "image-community-81e27.appspot.com",
  messagingSenderId: "97358331505",
  appId: "1:97358331505:web:692a90ccd5e9ada037a5d0",
  measurementId: "G-MKBHKC9YT8",
};

firebase.initializeApp(firebaseConfig);

const apiKey = firebaseConfig.apiKey;
const auth = firebase.auth();

export { auth, apiKey };
