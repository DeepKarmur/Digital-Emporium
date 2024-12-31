// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbiC2zvtPwjjDn2vWgpi52Gg3_8PArwOo",
  authDomain: "digital-emporium-bb2df.firebaseapp.com",
  projectId: "digital-emporium-bb2df",
  storageBucket: "digital-emporium-bb2df.appspot.com",
  messagingSenderId: "893427731552",
  appId: "1:893427731552:web:2b970f12bb391d7be90705"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth}