// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTGwB7S1zM3SfbSn40UY3VrWdUbfOX1eY",
  authDomain: "chatapplication-a9cc2.firebaseapp.com",
  projectId: "chatapplication-a9cc2",
  storageBucket: "chatapplication-a9cc2.appspot.com",
  messagingSenderId: "762927451042",
  appId: "1:762927451042:web:4f87b2095d2986fafa40fb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export default getFirestore(app)
 