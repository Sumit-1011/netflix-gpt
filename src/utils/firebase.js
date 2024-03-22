// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqLqefPTVRnK98pE8mMJ02olGrdGMe2xk",
  authDomain: "netfixgpt-205bc.firebaseapp.com",
  projectId: "netfixgpt-205bc",
  storageBucket: "netfixgpt-205bc.appspot.com",
  messagingSenderId: "14452657831",
  appId: "1:14452657831:web:fba30405c914c5b03dd582",
  measurementId: "G-1CPPCQQWZF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();