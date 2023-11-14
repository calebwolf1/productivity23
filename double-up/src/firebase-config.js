// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD9OeGcgFufyx-RGM5DZ0XdZBCpP1Yx61Q",
    authDomain: "doubleup-f0235.firebaseapp.com",
    projectId: "doubleup-f0235",
    storageBucket: "doubleup-f0235.appspot.com",
    messagingSenderId: "168352141220",
    appId: "1:168352141220:web:a12325b71c7de710e83b31",
    measurementId: "G-F958K68VXJ"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);
const analytics = getAnalytics(app);

export { auth, app, firestore, storage }