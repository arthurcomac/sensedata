import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxbKPVL8s2C9a06KllYSP0cs1x11alnhw",
  authDomain: "testesensedata-47504.firebaseapp.com",
  projectId: "testesensedata-47504",
  storageBucket: "testesensedata-47504.appspot.com",
  messagingSenderId: "1030951333451",
  appId: "1:1030951333451:web:24bf250f3783513d3767ce"
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);