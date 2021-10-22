// Import the functions you need from the SDKs you need
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDHDTmCjVNh2wo0b0N950L55w3AWqdSZ68",
  authDomain: "charlando-c851a.firebaseapp.com",
  
  projectId: "charlando-c851a",
  storageBucket: "charlando-c851a.appspot.com",
  messagingSenderId: "453936795820",
  appId: "1:453936795820:web:7644409c673da528188f09"
});

const db = firebaseApp.firestore()

const auth = firebase.auth()

export { db, auth}

