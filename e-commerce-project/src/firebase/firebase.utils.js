import firebase from 'firebase/app'; //need for access to firestore and auth
import 'firebase/firestore'; // for the database 
import 'firebase/auth'; 

const config = {
    apiKey: "AIzaSyC5gaK9yBkoXIX7Qi7sx_C6PEZ4DP5hbBU",
    authDomain: "crown-db-iar.firebaseapp.com",
    projectId: "crown-db-iar",
    storageBucket: "crown-db-iar.appspot.com",
    messagingSenderId: "20036987527",
    appId: "1:20036987527:web:de9fd59f2df169b5ede622",
    measurementId: "G-0F5PF9D0ZQ"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  //set up google authentication utility
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;