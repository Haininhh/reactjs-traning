import Logo from "../assets/img/search.png";
import Google from "../assets/img/Google.png";
import "./Header.css";

const Header = (props) => {
  const onClick = () => {
    props.setState("login");
  };

  return (
    <header className="Header">
      <span className="header-img">
        <img src={Google} alt="Google" />{" "}
      </span>
      {props.loginState === "home" ? (
        <div>
          <button className="btn-log-out" onClick={onClick}>
            <span className="img-log-out">
              <img src={Logo} alt="Logo" />
            </span>
            Log out with Google
          </button>
        </div>
      ) : (
        <></>
      )}
    </header>
  );
};

export default Header;
