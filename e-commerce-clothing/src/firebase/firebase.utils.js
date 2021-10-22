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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  // Get an user reference from users/
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  // Snapshot represents the data
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    // If the snapshot doesn't exist, data is created in that place
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("Error creating user", error.message);
    }
  }

  return userRef;

  // console.log('Testing firestore db : ', firestore.doc("/users/128uzhuhsjd"));
  // console.log('Snapshot : ', snapShot);
};

firebase.initializeApp(config);

// Access to auth() method from firebase
export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Access to GoogleAuthProvider from auth
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
