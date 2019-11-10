import "firebase/firestore";
import "firebase/auth";

import firebase from "firebase/app";

interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  databaseURL: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
}

const config: FirebaseConfig = {
  apiKey: "AIzaSyD6hsA-bPkvFdqYQWEiffJ64dMsjweQ4vw",
  authDomain: "crwn-db-49dc6.firebaseapp.com",
  databaseURL: "https://crwn-db-49dc6.firebaseio.com",
  projectId: "crwn-db-49dc6",
  storageBucket: "crwn-db-49dc6.appspot.com",
  messagingSenderId: "713764517459",
  appId: "1:713764517459:web:45b4f9033606e8e5c738a6"
};

// Checks if the email address is already registered in the aplication
export const doesEmailExist = async (email: string) => {
  const allUsersReference = firestore.collection("/users");
  let userAlreadyExists = false;
  await allUsersReference.get().then(allUsers =>
    allUsers.forEach(user => {
      if (user.data().email === email) {
        userAlreadyExists = true;
        return;
      }
    })
  );
  return userAlreadyExists;
};

export const createUserProfileDocument = async (
  userAuth: any,
  additionalData?: any
) => {
  if (!userAuth) {
    return;
  }

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("Error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const googleProvider = new firebase.auth.GoogleAuthProvider();
const facebookProvider = new firebase.auth.FacebookAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
facebookProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);
export const signInWithFacebook = () => auth.signInWithPopup(facebookProvider);