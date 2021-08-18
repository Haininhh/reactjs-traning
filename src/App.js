import React, { useState } from "react";
import Login from "../src/components/Login";
import Home from "../src/components/Home";

const App = () => {
  const [state, setState] = useState("login");

  if (state === "login") {
    return <Login setState={setState} />;
  } else if (state === "home") {
    return <Home />;
  }
  return <></>;
};
export default App;
