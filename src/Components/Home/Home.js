import './Home.css';
import Header from '../Header';
import Footer from '../Footer';
import Logo from '../assets/img/search.png';
import React, { useState } from "react";

const Home = (props) => {
    if (props.loginState === "home") {
        return (
            <div className="content">
                Home Page
            </div>
        
        );
    }   
}
    


export default Home;