import {initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword  } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
    apiKey: "AIzaSyA9KTZLjnPHbEayz63kxlIQzYPG2QLgtM4",
    authDomain: "netflix-clone-cbc59.firebaseapp.com",
    projectId: "netflix-clone-cbc59",
    storageBucket: "netflix-clone-cbc59.appspot.com",
    messagingSenderId: "992870822935",
    appId: "1:992870822935:web:3d99bd0a63f1b45c609852"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const auth = getAuth(app);

  export { auth }
  export default db;