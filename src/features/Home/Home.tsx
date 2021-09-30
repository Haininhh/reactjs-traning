import "./Home.css";
import Logo from "../../assets/img/search.png";
import Header from "../../components/Header/Header";

const Home = () => {
  return (
    <>
      <Header />
      <div className="content">
        <div className="Container">
          <img className="bg-container" src={Logo} alt="Logo" />
          <h1>Sign in with Google</h1>
        </div>
      </div>
    </>
  );
};

export default Home;
