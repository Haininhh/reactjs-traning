import React, { useState } from "react";
import { Login } from "../features/login/Login";
import { Home } from "../features/home/Home";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";

export const App = () => {
  const [state, setState] = useState("login");

  return (
    <div className="App">
      <Header setState={setState} loginState={state} />
      {state === "login" ? (
        <Login setState={setState} loginState={state}></Login>
      ) : (
        <Home setState={setState} loginState={state} />
      )}
      <Footer />
    </div>
  );
};
