import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB04juzA6cRC3jAqgNa1D6mw6juAukVyc0",
  authDomain: "linkedin-clone-7e0a3.firebaseapp.com",
  projectId: "linkedin-clone-7e0a3",
  storageBucket: "linkedin-clone-7e0a3.appspot.com",
  messagingSenderId: "634355117431",
  appId: "1:634355117431:web:57d36c5e6d2bd7a29f0572",
  measurementId: "G-HG4JGB2NE9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth()

export { db, auth };

