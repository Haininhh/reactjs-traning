import './Home.css';
import Logo from '../../assets/png/search.png';
// import React, { useState } from "react";

export const Home = () => {
    return (
        <div className="content">
            <div className="Container">
                <img className="bg-container" src={Logo} alt="Logo" />
                <h1>HOME</h1>
            </div>
        </div>    
    );
}
    