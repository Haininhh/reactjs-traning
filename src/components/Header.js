import Logo from './search.png';
import Google from './Google.png';
import '../components/Header.css'


function Header(props) {
    const logOut = () => {
        props.setState('login');
    };
    return (
        <header className="Header">
            <a className="header-img" href="home"><img src={Google} alt="Google" /> </a>
            <button className="btn-log-out" onClick={logOut}>
                <span className="img-log-out">
                    <img src={Logo} alt="Logo" />
                </span>
                Log out with Google</button>
        </header>
    );
}

export default Header;