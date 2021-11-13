import React from 'react';
import { useState } from 'react';
import ShortlyLogo from './logo.svg';

import './Header.css';

function Header() {
    const [navOpen, setNavOpen] = useState(false);

    function handleClick() {
        setNavOpen(!navOpen);
    }

    return (
        <header 
            className="header container"
            onMouseLeave={() => {
                if (navOpen) {
                    setNavOpen(false);
                }
            }}    
        >
            <img src={ShortlyLogo} alt="Shortly logo" />

            <nav className="navDesktopMenu">
                <ul>
                    <li><a href="#" className="link">Features</a></li>
                    <li><a href="#" className="link">Pricing</a></li>
                    <li><a href="#" className="link">Resources</a></li>
                </ul>
                <ul>
                    <li><a href="#" className="link">Login</a></li>
                    <li><button className="button1">Sign up</button></li>
                </ul>
            </nav>

            <nav className={"navMobileMenu " + (navOpen ? "show" : "hide" )}>
                <ul>
                    <li><a href="#" className="link">Features</a></li>
                    <li><a href="#" className="link">Pricing</a></li>
                    <li><a href="#" className="link">Resources</a></li>
                    <hr />
                    <li><a href="#" className="link">Login</a></li>
                    <li><button className="button1">Sign up</button></li>
                </ul>
            </nav>

            <i className="las la-bars navMobileButton"
               onClick={() => handleClick()}
            ></i>
        </header>
    )
}

export default Header