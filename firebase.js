import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD8wFkDIqdHp1OKmJUgNqv_Ll97lGXkPgk",
  authDomain: "todoapp-66cbb.firebaseapp.com",
  projectId: "todoapp-66cbb",
  storageBucket: "todoapp-66cbb.appspot.com",
  messagingSenderId: "830908162405",
  appId: "1:830908162405:web:b5483c057e1d590b96818c",
  measurementId: "G-WGV6VX4FPJ",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export { auth, db };
