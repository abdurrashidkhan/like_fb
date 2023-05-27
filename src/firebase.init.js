// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCm2uK5aNGBeUAAcnMdsMBZS3bjcqVCu-o",
  authDomain: "photoframe-2023.firebaseapp.com",
  projectId: "photoframe-2023",
  storageBucket: "photoframe-2023.appspot.com",
  messagingSenderId: "7774378153",
  appId: "1:7774378153:web:838b0a92ffee983176b1b8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;