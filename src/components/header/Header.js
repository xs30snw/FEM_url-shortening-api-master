import { useState } from 'react';
import ShortlyLogo from './logo.svg';

import './Header.css';

function Header() {
    const [navOpen, setNavOpen] = useState(false);
    
    function handleClick() {
        setNavOpen(!navOpen);        
    }

    let timer;

    function closeNavAfter(time) {
        timer = window.setTimeout(
            () => setNavOpen(false),
            time
        );
    }

    function resetNavClosing() {
        clearTimeout(timer);
    }

    return (
        <header 
            className="header container"
            onMouseLeave={() => closeNavAfter(500)}
            onMouseOver={() => resetNavClosing()}  
        >
            <img className="header__logo" src={ShortlyLogo} alt="Shortly logo" />

            <nav className="header__nav-desktop">
                <ul>
                    <li><a href="#root" className="btn-secondary">Features</a></li>
                    <li><a href="#root" className="btn-secondary">Pricing</a></li>
                    <li><a href="#root" className="btn-secondary">Resources</a></li>
                </ul>
                <ul>
                    <li><a href="#root" className="btn-secondary">Login</a></li>
                    <li><button className="btn-primary">Sign Up</button></li>
                </ul>
            </nav>

            <nav className={"header__nav-mobile " + (navOpen ? "" : "hide" )}>
                <ul>
                    <li><a href="#root" className="btn-secondary btn-secondary--mobile">Features</a></li>
                    <li><a href="#root" className="btn-secondary btn-secondary--mobile">Pricing</a></li>
                    <li><a href="#root" className="btn-secondary btn-secondary--mobile">Resources</a></li>
                    <hr />
                    <li><a href="#root" className="btn-secondary btn-secondary--mobile">Login</a></li>
                    <li><button className="btn-primary btn-primary--mobile">Sign up</button></li>
                </ul>
            </nav>

            <i className="las la-bars header__btn-mobile-menu"
               onClick={() => handleClick()}
            ></i>
        
        </header>
    )
}

export default Header;