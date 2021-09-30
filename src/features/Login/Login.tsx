import { Link } from "react-router-dom";
import Logo from "../../assets/img/search.png";
import Header from "../../components/Header/Header";
import "./Login.css";

function Login() {
  return (
    <>
      <Header />
      <div className="Container">
        <img className="bg-container" src={Logo} alt="Logo" />
        <h1>Sign in with Google</h1>
        <Link to="/" style={{ textDecoration: "none" }}>
          <button className="btn-sig-in">
            <span className="img-sig-in">
              <img src={Logo} alt="Logo" />
            </span>
            Sign in with Google
          </button>
        </Link>
      </div>
    </>
  );
}

export default Login;
