import React, { useState } from "react";
import Login from "./Components/Login";
import Home from "./Components/Home";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

const App = () => {
  const [state, setState] = useState("login");

  return <div>
    <Header setState={setState} loginState={state} />
    {state === "login" ? (
      <Login setState={setState} />
    ) : (
      <Home setState={setState} loginState={state} />
    )}
    <Footer />
  </div>;
};
export default App;
