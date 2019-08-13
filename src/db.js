import firebase from "firebase/app";

import "firebase/firestore";

// Firebase Config Object
const firebaseConfig = {
  apiKey: "AIzaSyChJiNb6klHn4DhzwybZ09VI3uFbFVQ7qA",
  authDomain: "tunum-app.firebaseapp.com",
  databaseURL: "https://tunum-app.firebaseio.com",
  projectId: "tunum-app",
  storageBucket: "tunum-app.appspot.com",
  messagingSenderId: "1156519201",
  appId: "1:1156519201:web:290ce362e5e26a0a",
};

firebase.initializeApp(firebaseConfig);

// Get a Firestore instance
export const db = firebase.firestore();
