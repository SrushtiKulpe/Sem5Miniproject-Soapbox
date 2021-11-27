import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDSzN2HANzfFaJNBImc8g5eAEkuVMdObnM",
    authDomain: "myproject-827f1.firebaseapp.com",
    projectId: "myproject-827f1",
    storageBucket: "myproject-827f1.appspot.com",
    messagingSenderId: "43936533208",
    appId: "1:43936533208:web:05c9b56038a81998c425ad",
    measurementId: "G-RFRHC7KDRJ"
  };

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const fs = firebase.firestore();
const storage = firebase.storage();

export {auth,fs,storage}