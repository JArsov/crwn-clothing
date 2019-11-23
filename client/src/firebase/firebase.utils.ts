import "firebase/firestore";
import "firebase/auth";

import { ShopDataCollections } from "../shared/shop.data";
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

/**
 * a generic method that can be used for all collections and documents that should be added in firebase
 * @param collectionKey - the key under which the collection should be saved
 * @param objectsToAdd - the collection documents (that's why they are of type any)
 */
export const addCollectionAndDocuments = async (
  collectionKey: string,
  objectsToAdd: any
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach((shopData: any) => {
    const newShopDataRef = collectionRef.doc();
    batch.set(newShopDataRef, shopData);
  });

  return await batch.commit();
};

export const convertCollectionsSnapshopToMap = (
  collections: firebase.firestore.QuerySnapshot
) => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();
    const shopDataObject = {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    };
    return shopDataObject;
  });
  return transformedCollection.reduce((accumulator, collection) => {
    (accumulator as ShopDataCollections)[
      collection.title.toLowerCase()
    ] = collection;
    return accumulator;
  }, {});
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const facebookProvider = new firebase.auth.FacebookAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
facebookProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);
export const signInWithFacebook = () => auth.signInWithPopup(facebookProvider);
