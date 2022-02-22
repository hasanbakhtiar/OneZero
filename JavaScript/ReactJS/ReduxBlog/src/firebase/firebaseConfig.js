import firebase from 'firebase/app';
import 'firebase/database'; 
import 'firebase/auth'



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYWwnnHAZBp-85X233BpRHjuTKqVucmoQ",
  authDomain: "onezero-33240.firebaseapp.com",
  databaseURL: "https://onezero-33240-default-rtdb.firebaseio.com",
  projectId: "onezero-33240",
  storageBucket: "onezero-33240.appspot.com",
  messagingSenderId: "140239216503",
  appId: "1:140239216503:web:8391d8bd0cfd389476cb72"
  };

  firebase.initializeApp(firebaseConfig);

  const database = firebase.database();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export  {database as default, googleAuthProvider, firebase}