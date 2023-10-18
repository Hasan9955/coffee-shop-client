// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAefFmO1siUvhwYpqcciwJOhjVdf_yNuI",
  authDomain: "coffee-store-client-b7125.firebaseapp.com",
  projectId: "coffee-store-client-b7125",
  storageBucket: "coffee-store-client-b7125.appspot.com",
  messagingSenderId: "885660266363",
  appId: "1:885660266363:web:0624b933c746e1146297de"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const Auth = getAuth(app)
export default Auth;