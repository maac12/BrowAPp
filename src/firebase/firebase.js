import { useEffect, useState } from "react";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, signOut, signInWithEmailAndPassword,onAuthStateChanged}  from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCi4R_-lWiCa_p7qV18t6EOhl1y4Row_0k",
  authDomain: "browapp-23ddc.firebaseapp.com",
  projectId: "browapp-23ddc",
  storageBucket: "browapp-23ddc.appspot.com",
  messagingSenderId: "616241827341",
  appId: "1:616241827341:web:2a995e9c7090477f9b4f44"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export function login (email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function logout() {
  return signOut(auth);
}

// Custom Hook
export function useAuth() {
  const [ currentUser, setCurrentUser ] = useState();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, user => setCurrentUser(user));
    return unsub;
  }, [])

  return currentUser;
}