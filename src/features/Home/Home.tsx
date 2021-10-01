import { useEffect, useState } from "react";
import Logo from "../../assets/img/search.png";
import Footer from "../../components/Footer";
import Header from "../../components/Header/Header";
import "./Home.css";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const Home = () => {
  return (
    <>
      <Header />
      <div className="content">
        <div className="Container">
          <img className="bg-container" src={Logo} alt="Logo" />
          <h1>Hello {/* {name} */}</h1>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
