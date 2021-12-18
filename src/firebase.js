import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc, addDoc, collection, getDocs, query,where } from "firebase/firestore";

const firebaseConfig =initializeApp ({
    apiKey: "AIzaSyAqRPhgTWlsJQZkOfM-t7fANBhMI93ClJI",
    authDomain: "my-react-app-ee23c.firebaseapp.com",
    projectId: "my-react-app-ee23c",
    storageBucket: "my-react-app-ee23c.appspot.com",
    messagingSenderId: "1050533661574",
    appId: "1:1050533661574:web:a1a65745a7b26eded37a07",
    measurementId: "G-L6EZWXMSPF"
  });


  const auth = getAuth();
  const db = getFirestore();
  
  export {
      auth,
      createUserWithEmailAndPassword,
      signInWithEmailAndPassword,
      onAuthStateChanged,
  
      db,
      doc,
      setDoc,
      getDoc,
      addDoc,
      collection,
      getDocs,
      query,
      where
  };