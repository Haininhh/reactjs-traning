import './Login.css';
import Logo from './search.png';
import React, { useState, useEffect, useCallback } from "react";
// import ReactDOM from "react-dom";



function Login() {
    const [state, setState] = useState("login");
    const onClick = () => {
        setState("home");
        window.open("Home.js")
    };
    const homePage = useCallback((event) => {
        console.log("homePage", state, event);
      }, []);
    const addLoginListener = () =>
        window.addEventListener("login", homePage);
    const removeLoginListener = () =>
        window.removeEventListener("login", homePage);
    
        useEffect(() => {
            addLoginListener();
            return () => {
                removeLoginListener();
            };
        }, []);
        useEffect(() => {
            console.log("Current state: ", state);
          }, [state]);
        
    return (
        <div className="Container">
            <img className="bg-container" src={Logo} alt="Logo" />
            <h1>Sign in with Google</h1>
            <button className="btn-sig-in">
                <span className="img-sig-in">
                    <img src={Logo} alt="Logo" />
                </span>
                Sign in with Google</button>
         
            <button className="btn-sig-in" onClick={onClick}>
                <span className="img-sig-in">
                    <img src={Logo} alt="Logo" />
                </span>
                Sign in with Google</button>
          
        </div>

    );
}

export default Login;
