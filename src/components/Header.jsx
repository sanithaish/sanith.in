import { useState, useEffect } from 'react';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            // Update active section based on scroll position
            const sections = ['home', 'about', 'skills', 'experience', 'education', 'projects', 'contact'];
            const current = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });
            if (current) setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const headerHeight = 80;
            const targetPosition = element.offsetTop - headerHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            setIsMobileMenuOpen(false);
        }
    };

    const navItems = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'skills', label: 'Skills' },
        { id: 'experience', label: 'Experience' },
        { id: 'education', label: 'Education' },
        { id: 'projects', label: 'Projects' },
        { id: 'contact', label: 'Contact' }
    ];

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`} id="header">
            <nav className="nav container">
                <a href="#home" className="logo" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>
                    Sanith A
                </a>

                <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`} id="navMenu">
                    {navItems.map(item => (
                        <li key={item.id}>
                            <a
                                href={`#${item.id}`}
                                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection(item.id);
                                }}
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>

                <button
                    className="mobile-toggle"
                    id="mobileToggle"
                    aria-label="Toggle navigation"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? '✕' : '☰'}
                </button>
            </nav>
        </header>
    );
};

export default Header;
