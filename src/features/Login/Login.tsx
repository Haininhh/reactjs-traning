import { Link } from "react-router-dom";
import Logo from "../../assets/img/search.png";
import Footer from "../../components/Footer";
import Header from "../../components/Header/Header";
import handleLoginWithGoogle from "../../firebase/LoginWithGoogle";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import "./Login.css";

function Login() {
  const [name, setName] = useState<string | null>("");
  const [isLogIn, setIsLogIn] = useState(false);
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user.displayName);
        setName(user.displayName);
        setIsLogIn(true);
      } else {
        console.log("user is not signed in");
      }
    });
  });
  return (
    <>
      <Header />
      <div className="Container">
        <img className="bg-container" src={Logo} alt="Logo" />
        <h1>Sign in with Google</h1>
        {isLogIn === true ? (
          <Link to="/" style={{ textDecoration: "none" }}>
            <button className="btn-sig-in" onClick={handleLoginWithGoogle}>
              <span className="img-sig-in">
                <img src={Logo} alt="Logo" />
              </span>
              Sign in with Google
            </button>
          </Link>
        ) : (
          <Link to="/login"></Link>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Login;
