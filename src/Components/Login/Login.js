import './Login.css';
import Logo from '../assets/img/search.png';
import { BrowserRouter as  Router, Link, Switch } from 'react-router-dom';
// import React, { useState } from "react";

function Login(props) {

    const onClick = () => {
        props.setState('home');
    };

    return (
        <Router>
            <Switch>
                <div className="Container">
                    <img className="bg-container" src={Logo} alt="Logo" />
                    <h1>Sign in with Google</h1>
                    <button className="btn-sig-in">
                        <span className="img-sig-in">
                            <img src={Logo} alt="Logo" />
                        </span>
                        Sign in with Google</button>
                <Link to="/home" style={{textDecoration: 'none'}}>
                    <button className="btn-sig-in" onClick={onClick}>
                        <span className="img-sig-in">
                            <img src={Logo} alt="Logo" />
                        </span>
                        Sign in with Google</button>
                </Link>
                </div>
            </Switch>
        </Router>
    );
}

export default Login;