import iFacebook from './icon-facebook.svg';
import iInstagram from './icon-instagram.svg';
import iPinterest from './icon-pinterest.svg';
import iTwitter from './icon-twitter.svg';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <h4>Shortly</h4>
                <div>
                    <h6>Features</h6>
                    <ul>
                        <li><a href="#root">Link Shortening</a></li>
                        <li><a href="#root">Branding Links</a></li>
                        <li><a href="#root">Analytics</a></li>
                    </ul>
                </div>
                <div>
                    <h6>Resources</h6>
                    <ul>
                        <li><a href="#root">Blog</a></li>
                        <li><a href="#root">Developers</a></li>
                        <li><a href="#root">Support</a></li>
                    </ul>
                </div>
                <div>
                    <h6>Company</h6>
                    <ul>
                        <li><a href="#root">About</a></li>
                        <li><a href="#root">Our Team</a></li>
                        <li><a href="#root">Careers</a></li>
                        <li><a href="#root">Contact</a></li>
                    </ul>
                </div>
                <div>
                    <ul className="socialLinks">
                        <li><a href="#root"><img src={iFacebook} alt="Facebook logo." /></a></li>
                        <li><a href="#root"><img src={iTwitter} alt="Twitter logo." /></a></li>
                        <li><a href="#root"><img src={iPinterest} alt="Pinterest logo." /></a></li>
                        <li><a href="#root"><img src={iInstagram} alt="Instagram logo." /></a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer
