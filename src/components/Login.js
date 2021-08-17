import './Login.css';
import search from './img/search.png';

const  Homepage = () => {
    window.open('home.html', "_blank");
}
function Login() {
    return (
        <div className="Container">
            <img className="bg-container" src={search} />
            <h1>Sign in with Google</h1>
            <button className="btn-sig-in">
                <span className="img-sig-in">
                    <img src={search} />
                </span>
                Sign in with Google</button>
            <button className="btn-sig-in" onClick={Homepage}>
                <span className="img-sig-in">
                    <img src={search} />
                </span>
                Sign in with Google</button>
        </div>

    );
}

export default Login;
