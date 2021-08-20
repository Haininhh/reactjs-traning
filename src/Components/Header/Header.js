import Logo from '../assets/img/search.png';
import Google from '../assets/img/Google.png';
import './Header.css';
import {BrowserRouter as Router, Link} from "react-router-dom";



const Header = (props) => {
    const onClick = () => {
        props.setState('login');
    };
    
    return (
        <Router>
        <header className="Header">
            <span className="header-img"><img src={Google} alt="Google" /> </span>
            <Link to="/login" style={{ textDecoration: 'none' }}>
            <button className="btn-log-out" onClick={onClick}>
                <span className="img-log-out">
                    <img src={Logo} alt="Logo" />
                </span>
                Log out with Google</button>
            </Link>
        </header>
        </Router>
    );
}

export default Header;