import React, { useState } from "react";
import Login from "./Components/Login";
import Home from "./Components/Home";
import Header from './Components/Header';
import Footer from './Components/Footer';


const App = () => {
  const [state, setState] = useState("login");
  
  if (state === "login") {
    return <Login setState={setState} />;
  } else if (state === "home") {
    return(
      <>
      <Header setState={setState} />
      <Home  />;
      <Footer />
      </>
    )
  }
  return <></>;
}


export default App;
