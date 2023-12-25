
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAgiDEG-RF1kw8MuAdp9e7iVy7gFKDoay8",
  authDomain: "authentication-5e1f8.firebaseapp.com",
  projectId: "authentication-5e1f8",
  storageBucket: "authentication-5e1f8.appspot.com",
  messagingSenderId: "937577535768",
  appId: "1:937577535768:web:04a2b0d27083bc4cbbe66d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth ;
