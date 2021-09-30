import firebase from "firebase/app";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyD00GL6Rsapr9MwdGk1i-KsOhxkrRRGUOw",
  authDomain: "authorization-da952.firebaseapp.com",
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export const auth = firebase.auth();
export const GoogleAuthProvider = new firebase.auth.GoogleAuthProvider();
