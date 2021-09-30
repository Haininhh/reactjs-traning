import { Link } from "react-router-dom";
import Google from "../../assets/img/Google.png";
import Logo from "../../assets/img/search.png";
import "./Header.css";

const Header = () => {
  return (
    <header className="Header">
      <Link to="/">
        <span className="header-img">
          <img src={Google} alt="Google" />{" "}
        </span>
      </Link>
      <Link to="/login" style={{ textDecoration: "none" }}>
        <button className="btn-log-out">
          <span className="img-log-out">
            <img src={Logo} alt="Logo" />
          </span>
          Log out with Google
        </button>
      </Link>
    </header>
  );
};

export default Header;
