import firebase from "firebase/compat/app";
// Need these follwing imports for DB & Authentication
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyDbhMhEJmA4137WQ1UdSfQJRCX9jUfyw_g",
  authDomain: "e-commerce-clothing-139b0.firebaseapp.com",
  projectId: "e-commerce-clothing-139b0",
  storageBucket: "e-commerce-clothing-139b0.appspot.com",
  messagingSenderId: "184375277808",
  appId: "1:184375277808:web:48456a1b44d422a819aa35",
  measurementId: "G-JRF2SHYW0K",
};

firebase.initializeApp(config);

// Access to auth() method from firebase
export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Access to GoogleAuthProvider from auth
const provider = new firebase.auth.GoogleAuthProvider(); 
provider.setCustomParameters({prompt: "select-account"});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

