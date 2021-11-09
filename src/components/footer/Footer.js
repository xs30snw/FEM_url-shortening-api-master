import React from 'react';

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
                        <li><a href="#">Link Shortening</a></li>
                        <li><a href="#">Branding Links</a></li>
                        <li><a href="#">Analytics</a></li>
                    </ul>
                </div>
                <div>
                    <h6>Resources</h6>
                    <ul>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Developers</a></li>
                        <li><a href="#">Support</a></li>
                    </ul>
                </div>
                <div>
                    <h6>Company</h6>
                    <ul>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Our Team</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div>
                    <ul className="socialLinks">
                        <li><a href="#"><img src={iFacebook} alt="Facebook logo." /></a></li>
                        <li><a href="#"><img src={iTwitter} alt="Twitter logo." /></a></li>
                        <li><a href="#"><img src={iPinterest} alt="Pinterest logo." /></a></li>
                        <li><a href="#"><img src={iInstagram} alt="Instagram logo." /></a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer
