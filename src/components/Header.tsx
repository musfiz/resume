import React, { useState } from 'react';
import { Menu as BarsIcon, X as XMarkIcon } from 'lucide-react';

interface HeaderProps {
    activeSection: string;
    isScrolled: boolean;
}

const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#technology', label: 'Technology' },
    { href: '#experience', label: 'Experience' },
    { href: '#education', label: 'Education' },
    { href: '#services', label: 'Services' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
];

const Header: React.FC<HeaderProps> = ({ activeSection, isScrolled }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const targetId = e.currentTarget.getAttribute('href');
        if (!targetId) return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const headerElement = document.getElementById('header');
            const headerHeight = headerElement ? headerElement.offsetHeight : 0;
            const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth',
            });
        }
        if (isMobileMenuOpen) {
            setIsMobileMenuOpen(false);
        }
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header id="header" className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'scrolled' : ''}`}>
            <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-xl">MR</span>
                    </div>
                    <span className="text-xl font-bold">Mustafizur Rahman</span>
                </div>

                <ul className="hidden md:flex space-x-8">
                    {navItems.map(item => (
                        <li key={item.href}>
                            <a
                                href={item.href}
                                onClick={handleNavLinkClick}
                                className={`nav-link hover:text-blue-500 transition-colors ${activeSection === item.href.substring(1) ? 'active' : ''}`}
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>

                <button id="mobile-menu-btn" className="md:hidden text-2xl" onClick={toggleMobileMenu} aria-label="Toggle menu" aria-expanded={isMobileMenuOpen}>
                    {isMobileMenuOpen ? <XMarkIcon className="w-6 h-6" /> : <BarsIcon className="w-6 h-6" />}
                </button>
            </nav>

            <div id="mobile-menu" className={`md:hidden container mx-auto px-6 pb-4 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
                <ul className="flex flex-col space-y-3">
                    {navItems.map(item => (
                        <li key={item.href}>
                            <a
                                href={item.href}
                                onClick={handleNavLinkClick}
                                className={`nav-link block py-2 hover:text-blue-500 transition-colors ${activeSection === item.href.substring(1) ? 'active' : ''}`}
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
};

export default Header;