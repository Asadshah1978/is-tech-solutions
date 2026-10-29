import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Yahan apni Firebase config daalein
const firebaseConfig = {
  apiKey: "AIzaSyBYDKcWVf5eF5chQVH7TUrAtNMQALn1Lfc",
  authDomain: "is-tech-solutions.firebaseapp.com",
  projectId: "is-tech-solutions",
  storageBucket: "is-tech-solutions.firebasestorage.app",
  messagingSenderId: "504720848136",
  appId: "1:504720848136:web:0314be33c97e3d90f168bd"
  
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);