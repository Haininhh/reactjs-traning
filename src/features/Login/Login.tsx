import { Link } from "react-router-dom";
import Logo from "../../assets/img/search.png";
import Footer from "../../components/Footer";
import Header from "../../components/Header/Header";
import "./Login.css";
// import firebase from "firebase";
// import { StyledFirebaseAuth } from "react-firebaseui";
// import { useEffect } from "react";
import { GoogleAuthProvider } from "../../firebase/firebase";

function Login() {
  const provider = new GoogleAuthProvider();
  provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
  // useEffect(() => {
  //   const unregisterAuthObserver = firebase
  //     .auth()
  //     .onAuthStateChanged(async (user) => {
  //       if (!user) {
  //         console.log("not logged in");
  //         return;
  //       }
  //       const token = await user.getIdToken();
  //       console.log(token);
  //     });
  //   return () => unregisterAuthObserver();
  // }, []);
  // const uiConfig = {
  //   signInFlow: "redirect",
  //   signInSuccessUrl: "/",
  //   signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
  // };

  return (
    <>
      <Header />
      <div className="Container">
        <img className="bg-container" src={Logo} alt="Logo" />
        <h1>Sign in with Google</h1>
        <Link to="/" style={{ textDecoration: "none" }}>
          {/* <button className="btn-sig-in">
            <span className="img-sig-in">
              <img src={Logo} alt="Logo" />
            </span>
            Sign in with Google
          </button> */}
          {/* <StyledFirebaseAuth
            uiConfig={uiConfig}
            firebaseAuth={firebase.auth()}
          /> */}
        </Link>
      </div>
      <Footer />
    </>
  );
}

export default Login;
