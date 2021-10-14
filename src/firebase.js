import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyCLBS2ckiYRiJh9uLybrzo4pVhaGq9uEMI",
    authDomain: "todolist1-9689f.firebaseapp.com",
    projectId: "todolist1-9689f",
    storageBucket: "todolist1-9689f.appspot.com",
    messagingSenderId: "109571981899",
    appId: "1:109571981899:web:1ecb432ed0b3e60ccfc3ce"
  };
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const firestore = getFirestore(app)