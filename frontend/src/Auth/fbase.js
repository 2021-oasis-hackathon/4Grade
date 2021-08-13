import firebase from "firebase/app";
import "firebase/auth"


const firebaseConfig = {
    apiKey: "AIzaSyBHdekq4z2tC2mfVn6yY8ZDSQwSbv8f6wY",
    authDomain: "oasis-8ebe8.firebaseapp.com",
    projectId: "oasis-8ebe8",
    storageBucket: "oasis-8ebe8.appspot.com",
    messagingSenderId: "475055097898",
    appId: "1:475055097898:web:6adfdd4260ef881fcc1b53"
 };
  
firebase.initializeApp(firebaseConfig);

export const firebaseInstance = firebase;
   
export const authService = firebase.auth();