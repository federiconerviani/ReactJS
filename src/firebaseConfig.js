// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfvhiPctK_6e9_R0Ml_jcE7iLvCtLI2Ck",
  authDomain: "valhalla-mushrooms.firebaseapp.com",
  projectId: "valhalla-mushrooms",
  storageBucket: "valhalla-mushrooms.appspot.com",
  messagingSenderId: "115347107318",
  appId: "1:115347107318:web:16360dfc7d5a0e7d0eabd7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
