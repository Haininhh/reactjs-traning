import './Login.css';
import Logo from './search.png';
// import React, { useState } from "react";

function Home(props) {
      const logout = () => {
        props.setState('login');
    };
    return (
        <div className="Container">
            <img className="bg-container" src={Logo} alt="Logo" />
            <h1>Sign in with Google</h1>
            <button className="btn-sig-in"  onClick={logout}>
                <span className="img-sig-in">
                    <img src={Logo} alt="Logo" />
                </span>
                Sign out with Google</button>
        </div>
    );
}

export default Home;