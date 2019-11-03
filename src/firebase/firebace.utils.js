import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCQQSLyokPSecPw_m4Am46aznV1Ge2ChtI",
  authDomain: "crwn-db-4920f.firebaseapp.com",
  databaseURL: "https://crwn-db-4920f.firebaseio.com",
  projectId: "crwn-db-4920f",
  storageBucket: "crwn-db-4920f.appspot.com",
  messagingSenderId: "93827566987",
  appId: "1:93827566987:web:4343e5230a0bf6c503738e",
  measurementId: "G-5DQQVR8XGY"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
