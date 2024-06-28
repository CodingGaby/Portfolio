// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEjcB6pvEeHUEdVYI0HU46lDxW89ZxVDE",
  authDomain: "portfoliophotos-9bf35.firebaseapp.com",
  projectId: "portfoliophotos-9bf35",
  storageBucket: "portfoliophotos-9bf35.appspot.com",
  messagingSenderId: "640864811397",
  appId: "1:640864811397:web:a7860ba99e30472dbb6cec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);