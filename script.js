// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAY5KU-nyHayAEJTc84ECwcDb3CSj1Haqk",
  authDomain: "quora-engineers.firebaseapp.com",
  projectId: "quora-engineers",
  storageBucket: "quora-engineers.appspot.com",
  messagingSenderId: "1033638303837",
  appId: "1:1033638303837:web:74c6c0242aa65f6016d5b4",
  measurementId: "G-Q3T1VS0R2E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);