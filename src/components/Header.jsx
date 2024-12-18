import '../styles/Header.css';
import { useState, useEffect } from 'react';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const isAboutPage = window.location.pathname === '/about';

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        if (isAboutPage) {
            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
        } else {
            setIsScrolled(true);
        }
    }, [isAboutPage]);

    return (
        <header className={`header ${isScrolled ? 'show' : 'hide'}`}>
            <div className="nav">
                <a href="/" className="logo-link">
                    <img src="src/assets/logo.png" alt="Logo" className="logo" />
                </a>
                <div className="container-content-nav">
                    <span className="nav-item"><a href="/services">Services</a></span>
                    <span className="nav-item"><a href="/about">À propos</a></span>
                    <div className="contact-button">
                        <span className="txt-btn-contact">Contact</span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
