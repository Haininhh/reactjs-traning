import './Login.css';
import Logo from './search.png';
// import React, { useState } from "react";

function Login(props) {
    console.log(props)
    const onClick = () => {
        props.setState('home');
    };

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