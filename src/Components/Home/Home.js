import './Home.css';
import Header from '../Header';
import Footer from '../Footer';
import Logo from '../assets/img/search.png';
import React, { useState } from "react";

const Home = (props) => {
    if (props.loginState === "home") {
        return (
            <div className="content">
                <Header setState={props.setState}/>
                <div className="Container">
                    <img className="bg-container" src={Logo} alt="Logo" />
                    <h1>Sign in with Google</h1>
                </div>
                <Footer />
            </div>
        
        );
    }   
}
    


export default Home;