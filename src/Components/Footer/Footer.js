import './Footer.css';
import facebook from './assets/img/facebook.svg';
import instagram from './assets/img/instagram.svg';
import linkedin from './assets/img/linkedin.svg';
import twitter from './assets/img/twitter.svg';


function Footer() {
    return (
        <footer className="footer">
            <div className="icons">
                <span><img className='icon-footer' src={facebook} alt="facebook"></img></span>
                <span><img className='icon-footer' src={linkedin} alt="linkedin"></img></span>
                <span><img className='icon-footer' src={instagram} alt="instagram"></img></span>
                <span><img className='icon-footer' src={twitter} alt="twitter"></img></span>
                <p className="company-name">
                    ABC &copy; 2021, ALL Rights Reserved
                </p>
            </div>
        </footer>
    );
}

export default Footer;





