import '../components/Footer.css';
import facebook from '../components/img/facebook.svg';
import instagram from '../components/img/instagram.svg';
import linkedin from '../components/img/linkedin.svg';
import twitter from '../components/img/twitter.svg';


function Footer() {
    return (
        <footer className="footer">
            <div className="icons">
                <a href="123"><img className='icon-footer' src={facebook} alt="facebook"></img></a>
                <a href="123"><img className='icon-footer' src={linkedin} alt="linkedin"></img></a>
                <a href="123"><img className='icon-footer' src={instagram} alt="instagram"></img></a>
                <a href="123"><img className='icon-footer' src={twitter} alt="twitter"></img></a>
                <p className="company-name">
                    ABC &copy; 2021, ALL Rights Reserved
                </p>
            </div>
        </footer>
    );
}

export default Footer;





