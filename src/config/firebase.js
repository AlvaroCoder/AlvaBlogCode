// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqB3ADLk2sOYGQofULwIjaIeWsexFhm5E",
  authDomain: "alvacodeblog.firebaseapp.com",
  projectId: "alvacodeblog",
  storageBucket: "alvacodeblog.appspot.com",
  messagingSenderId: "967891923577",
  appId: "1:967891923577:web:082c8d602d283f161d1aa8",
  measurementId: "G-FR5NRMR3RW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
