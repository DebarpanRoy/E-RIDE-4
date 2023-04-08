import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyBjYpdqF33f8DTjlFFh8g-LgoQqRc72-lY",
    authDomain: "bike-ride-d7ca1.firebaseapp.com",
    databaseURL: "https://bike-ride-d7ca1-default-rtdb.firebaseio.com",
    projectId: "bike-ride-d7ca1",
    storageBucket: "bike-ride-d7ca1.appspot.com",
    messagingSenderId: "281761281004",
    appId: "1:281761281004:web:1676b115d8e084592906c9"
  };

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
