import IconFacebook  from '../../media/IconFacebook';
import IconTwitter   from '../../media/IconTwitter';
import IconPinterest from '../../media/IconPinterest';
import IconInstagram from '../../media/IconInstagram';

import Logo from '../../media/logo';

import './Footer.css';

function Footer() {
    return (
        <footer className='footer'>
            <div className='container'>
                <Logo className='footer__logo' />

                <section className='footer__site-map' aria-label='Site map'>
                    <section className='footer__nav-list' aria-labelledby='footer-id--features'>
                        <h2 id='footer-id--features' className='footer__nav-list__title'>Features</h2>
                        <ul>
                            <li><a href="#root">Link Shortening</a></li>
                            <li><a href="#root">Branding Links</a></li>
                            <li><a href="#root">Analytics</a></li>
                        </ul>
                    </section>
                    <section className='footer__nav-list' aria-labelledby='footer-id--resources'>
                        <h2 id='footer-id--resources' className='footer__nav-list__title'>Resources</h2>
                        <ul>
                            <li><a href="#root">Blog</a></li>
                            <li><a href="#root">Developers</a></li>
                            <li><a href="#root">Support</a></li>
                        </ul>
                    </section>
                    <section className='footer__nav-list' aria-labelledby='footer-id--company'>
                        <h2 id='footer-id--company' className='footer__nav-list__title'>Company</h2>
                        <ul>
                            <li><a href="#root">About</a></li>
                            <li><a href="#root">Our Team</a></li>
                            <li><a href="#root">Careers</a></li>
                            <li><a href="#root">Contact</a></li>
                        </ul>
                    </section>
                </section>
                
                <section className='footer__social-icons' aria-label='Social links'>
                    <ul>
                        <li><a href="#root" aria-label='Visit Facebook'><IconFacebook className='footer__social-icon' /></a></li>
                        <li><a href="#root" aria-label='Visit Twitter'><IconTwitter className='footer__social-icon' /></a></li>
                        <li><a href="#root" aria-label='Visit Pinterest'><IconPinterest className='footer__social-icon' /></a></li>
                        <li><a href="#root" aria-label='Visit Instagram'><IconInstagram className='footer__social-icon' /></a></li>
                    </ul>
                </section>
            </div>
        </footer>
    )
}

export default Footer;