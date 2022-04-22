// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJulf2d_qGzA7JT_PiH1aE7d4qa5e71JI",
  authDomain: "genius-car-services-27707.firebaseapp.com",
  projectId: "genius-car-services-27707",
  storageBucket: "genius-car-services-27707.appspot.com",
  messagingSenderId: "448769225875",
  appId: "1:448769225875:web:7c8f6abf6413bcee3b0966"
}; 

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
