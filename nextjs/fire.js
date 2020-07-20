// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCoWyg9pi-dy7zD0l4DCcqy-voLzIHGwVI",
  authDomain: "differentlife07.firebaseapp.com",
  databaseURL: "https://differentlife07.firebaseio.com",
  projectId: "differentlife07",
  storageBucket: "differentlife07.appspot.com",
  messagingSenderId: "216773042829",
  appId: "1:216773042829:web:1e8ce25f7f58736fb6f8c4"
};

// Initialize Firebase
// firebase.initializeApp(firebaseConfig);
if (!firebase.apps.lenght) {
  firebase.initializeApp(firebaseConfig);
}
var db = firebase.firestore();
export default db