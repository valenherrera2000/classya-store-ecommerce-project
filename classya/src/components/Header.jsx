import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Cart from './CartIcon';
import homeBannerImg from '../assets/img/home-banner.png';
import menuImg from '../assets/img/menu-icon.png';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="header">
            <div className="menu-section">
                <div className="menu-icon-container" onMouseEnter={toggleMenu} onMouseLeave={toggleMenu}>
                    <img src={menuImg} alt="Menu Icon" />
                    {isMenuOpen && (
                        <div className="dropdown-menu">
                            <a href="#navbar">Categories</a>
                            <a href="#about">About</a>
                            <a href="#bottom">Payments</a>
                            <a href="#social-media">Socials</a>
                        </div>
                    )}
                </div>
                <a href="#menu">
                    <h1>Classya</h1>
                </a>
                <Link to="/checkout" title="View cart info">
                    <Cart />
                </Link>
            </div>
            <div id="menu" className="banner">
                <img src={homeBannerImg} alt="Classya Cover" />
                <h4>Where elegance meets style</h4>
                <a href="#navbar" className="shop-now-link">
                    SHOP NOW
                </a>
            </div>
        </div>
    );
};

export default Header;
