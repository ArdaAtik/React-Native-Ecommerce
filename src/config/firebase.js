// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAS1MD2vYEUggG2gup9MvI0CeIaA3Zj7Qg",
  authDomain: "test-auth-b33ea.firebaseapp.com",
  projectId: "test-auth-b33ea",
  storageBucket: "test-auth-b33ea.appspot.com",
  messagingSenderId: "631403263660",
  appId: "1:631403263660:web:5364c6ed135ab1e5ee5109",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export { auth, db };
