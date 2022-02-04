import IconFacebook  from '../../media/IconFacebook';
import IconTwitter   from '../../media/IconTwitter';
import IconPinterest from '../../media/IconPinterest';
import IconInstagram from '../../media/IconInstagram';

import Logo from '../../media/Logo';

import './Footer.css';

function Footer() {
    return (
        <footer className='footer'>
            <div className='container'>
                <Logo className='footer__logo' />

                <div className='footer__site-map'>
                    <div className='footer__nav-list'>
                        <h6 className='footer__nav-list__title'>Features</h6>
                        <ul>
                            <li><a href="#root">Link Shortening</a></li>
                            <li><a href="#root">Branding Links</a></li>
                            <li><a href="#root">Analytics</a></li>
                        </ul>
                    </div>
                    <div className='footer__nav-list'>
                        <h6 className='footer__nav-list__title'>Resources</h6>
                        <ul>
                            <li><a href="#root">Blog</a></li>
                            <li><a href="#root">Developers</a></li>
                            <li><a href="#root">Support</a></li>
                        </ul>
                    </div>
                    <div className='footer__nav-list'>
                        <h6 className='footer__nav-list__title'>Company</h6>
                        <ul>
                            <li><a href="#root">About</a></li>
                            <li><a href="#root">Our Team</a></li>
                            <li><a href="#root">Careers</a></li>
                            <li><a href="#root">Contact</a></li>
                        </ul>
                    </div>
                </div>
                
                <div className='footer__social-icons'>
                    <ul>
                        <li><a href="#root"><IconFacebook className='footer__social-icon' alt='Facebook'/></a></li>
                        <li><a href="#root"><IconTwitter className='footer__social-icon' alt='Twitter'/></a></li>
                        <li><a href="#root"><IconPinterest className='footer__social-icon' alt='Pinterest'/></a></li>
                        <li><a href="#root"><IconInstagram className='footer__social-icon' alt='Instagram'/></a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;