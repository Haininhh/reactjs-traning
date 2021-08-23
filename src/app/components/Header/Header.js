import Logo from '../../../assets/png/search.png';
import Google from '../../../assets/png/Google.png';
import './Header.css';
import { BrowserRouter as  Router, Link, Switch } from 'react-router-dom';



export const Header = (props) => {
    const onClick = () => {
        props.setState('login');
    };
    
    return (
        <Router>
            <Switch>
                <header className="Header">
                    <Link to="/home">
                        <span className="header-img"><img src={Google} alt="Google" /> </span>
                    </Link>
                    {props.loginState === 'home' ? <Link to="/login" style={{textDecoration: 'none'}}>
                        <button className="btn-log-out" onClick={onClick}>
                            <span className="img-log-out">
                                <img src={Logo} alt="Logo" />
                            </span>
                            Log out with Google</button>
                    </Link> : <></>}
                </header>
            </Switch>
        </Router>
        
    );
}