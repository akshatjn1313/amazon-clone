import 'firebase/compat/firestore';


import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBhok810XylyiL2L4HuJ_vVDJKqMYEllik",
    authDomain: "clone-92bab.firebaseapp.com",
    projectId: "clone-92bab",
    storageBucket: "clone-92bab.appspot.com",
    messagingSenderId: "899391696028",
    appId: "1:899391696028:web:97a875c4464e51b135d159"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db= firebaseApp.firestore()
  const auth = firebase.auth()

  export {db ,auth };