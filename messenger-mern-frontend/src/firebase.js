import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBunNTg34yYoHEyKEMnicHFfq3LNaL6bH4",
  authDomain: "fb-messenger-mern-939e0.firebaseapp.com",
  projectId: "fb-messenger-mern-939e0",
  storageBucket: "fb-messenger-mern-939e0.appspot.com",
  messagingSenderId: "656880289144",
  appId: "1:656880289144:web:f0489cf632c94d10b8748d",
  measurementId: "G-JC2GP18DTZ",
});

const db = firebaseApp.firestore();

export default db;
