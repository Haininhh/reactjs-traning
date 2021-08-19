import './Home.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Logo from './search.png';
import React, { useState } from "react";

function Home(props) {
    const [state, setState] = useState("home");
    if(state === "home"){
        return (
            <div className="content">
                <Header setState={setState}/>
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