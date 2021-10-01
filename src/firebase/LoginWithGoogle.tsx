import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import firebase from "firebase/compat/app";

export const firebaseConfig = {
  apiKey: "AIzaSyD00GL6Rsapr9MwdGk1i-KsOhxkrRRGUOw",
  authDomain: "authorization-da952.firebaseapp.com",
  projectId: "authorization-da952",
  storageBucket: "authorization-da952.appspot.com",
  messagingSenderId: "369086310243",
  appId: "1:369086310243:web:1943738551d04faae31556",
  measurementId: "G-RTESMWBW49",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const handleLoginWithGoogle = () => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.idToken;
      const user = result.user;
    })
    .catch((error) => {
      console.log(error);
    });
};

export default handleLoginWithGoogle;
