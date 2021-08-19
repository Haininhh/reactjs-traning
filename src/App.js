import React, { useState } from "react";
import Login from "./Components/Login";
import Home from "./Components/Home";

const App = () => {
  const [state, setState] = useState("login");
  
  if (state === "login") {
    return <Login setState={setState} />;
  } else if (state === "home") {
    
    return <Home setState={setState} />;
  }
  return <></>;
};
export default App;