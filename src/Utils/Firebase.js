// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyBFTf2gFByB3rg88fP2wiuC24iQzsJvcpk",
  authDomain: "cinenova-03.firebaseapp.com",
  projectId: "cinenova-03",
  storageBucket: "cinenova-03.firebasestorage.app",
  messagingSenderId: "53205526827",
  appId: "1:53205526827:web:77b6072b3dc7d03a33fd6e",
  measurementId: "G-CP8M092WNY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()