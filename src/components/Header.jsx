import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isPageScrollable, setIsPageScrollable] = useState(false);

    const isAboutPage = window.location.pathname === '/about' ||
        window.location.pathname === '/services' ||
        window.location.pathname === '/contact' ||
        window.location.pathname === '/';

    const checkIfPageIsScrollable = () => {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        setIsPageScrollable(documentHeight > windowHeight);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        const handleResize = () => {
            checkIfPageIsScrollable();
        };

        if (isAboutPage) {
            checkIfPageIsScrollable();

            window.addEventListener('scroll', handleScroll);
            window.addEventListener('resize', handleResize);

            const resizeObserver = new ResizeObserver(checkIfPageIsScrollable);
            resizeObserver.observe(document.body);

            return () => {
                window.removeEventListener('scroll', handleScroll);
                window.removeEventListener('resize', handleResize);
                resizeObserver.disconnect();
            };
        } else {
            setIsScrolled(true);
        }
    }, [isAboutPage]);

    const shouldShowHeader = isScrolled || !isPageScrollable;

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                shouldShowHeader
                    ? 'bg-white shadow-md py-2'
                    : 'bg-transparent py-4'
            } ${
                !shouldShowHeader && isAboutPage ? 'text-transparent pointer-events-none' : 'text-black'
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <a href="/" className={`flex-shrink-0 transition-opacity duration-300 ${
                        !shouldShowHeader && isAboutPage ? 'opacity-0' : 'opacity-100'
                    }`}>
                        <img
                            src="/assets/logo_line.png"
                            alt="Logo"
                            className="h-12 w-auto"
                        />
                    </a>

                    {/* Desktop Navigation */}
                    <nav className={`hidden md:flex items-center space-x-8 transition-opacity duration-300 ${
                        !shouldShowHeader && isAboutPage ? 'opacity-0' : 'opacity-100'
                    }`}>
                        <a
                            href="/services"
                            className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
                        >
                            Services
                        </a>
                        <a
                            href="/about"
                            className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
                        >
                            À propos
                        </a>
                        <a
                            href="/contact"
                            className="bg-accent text-secondary px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors duration-200"
                        >
                            Contact
                        </a>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className={`md:hidden p-2 rounded-lg hover:bg-gray-100 transition-opacity duration-300 ${
                            !shouldShowHeader && isAboutPage ? 'opacity-0' : 'opacity-100'
                        }`}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Menu"
                        disabled={!shouldShowHeader && isAboutPage}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden mt-4 pb-4">
                        <nav className="flex flex-col space-y-4">
                            <a
                                href="/services"
                                className="text-gray-700 hover:text-gray-900 transition-colors duration-200 py-2"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Services
                            </a>
                            <a
                                href="/about"
                                className="text-gray-700 hover:text-gray-900 transition-colors duration-200 py-2"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                À propos
                            </a>
                            <a
                                href="/contact"
                                className="bg-primary text-secondary px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors duration-200 text-center"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Contact
                            </a>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;