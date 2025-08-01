import React, { useState, useEffect } from 'react';
import './Header.css';
import SimpleGlitchText from './SimpleGlitchText';
import LanguageToggle from './LanguageToggle';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslation } from '../hooks/useTranslation';

const Header = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sections = ['home', 'menu', 'hours', 'contact'];
      const sectionScrollPosition = scrollPosition + 100;

      // Update scroll state for header background
      setIsScrolled(scrollPosition > 50);

      // Update active section
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && sectionScrollPosition >= element.offsetTop) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : 'transparent'}`}>
      <div className="header-container">
        <div className="logo">
          <img src="/images/logo.png" alt="Helvetia Pub" className="logo-img" />
          <span className={`logo-text ${isScrolled ? '' : 'dark-text'}`}>HELVETIA PUB</span>
        </div>
        {/* Desktop Navigation */}
        <nav className="nav desktop-nav">
          <ul className="nav-list">
            <li>
              <a href="#home" className={`nav-link ${activeSection === 'home' ? 'active' : ''} ${isScrolled ? '' : 'dark-text'}`}>
                <SimpleGlitchText>{t('home')}</SimpleGlitchText>
              </a>
            </li>
            <li>
              <a href="#menu" className={`nav-link ${activeSection === 'menu' ? 'active' : ''} ${isScrolled ? '' : 'dark-text'}`}>
                <SimpleGlitchText>{t('menu')}</SimpleGlitchText>
              </a>
            </li>
            <li>
              <a href="#hours" className={`nav-link ${activeSection === 'hours' ? 'active' : ''} ${isScrolled ? '' : 'dark-text'}`}>
                <SimpleGlitchText>{t('hours')}</SimpleGlitchText>
              </a>
            </li>
            <li>
              <a href="#contact" className={`nav-link ${activeSection === 'contact' ? 'active' : ''} ${isScrolled ? '' : 'dark-text'}`}>
                <SimpleGlitchText>{t('contact')}</SimpleGlitchText>
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="mobile-menu-container">
          <div className="language desktop-language">
            <LanguageToggle />
          </div>
          <button 
            className={`mobile-menu-toggle ${isScrolled ? '' : 'dark-text'}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <span className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
            <span className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
            <span className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
          <div className="mobile-nav-content">
            <ul className="mobile-nav-list">
              <li>
                <a 
                  href="#home" 
                  className={`mobile-nav-link ${activeSection === 'home' ? 'active' : ''}`}
                  onClick={closeMobileMenu}
                >
                  <SimpleGlitchText>{t('home')}</SimpleGlitchText>
                </a>
              </li>
              <li>
                <a 
                  href="#menu" 
                  className={`mobile-nav-link ${activeSection === 'menu' ? 'active' : ''}`}
                  onClick={closeMobileMenu}
                >
                  <SimpleGlitchText>{t('menu')}</SimpleGlitchText>
                </a>
              </li>
              <li>
                <a 
                  href="#hours" 
                  className={`mobile-nav-link ${activeSection === 'hours' ? 'active' : ''}`}
                  onClick={closeMobileMenu}
                >
                  <SimpleGlitchText>{t('hours')}</SimpleGlitchText>
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className={`mobile-nav-link ${activeSection === 'contact' ? 'active' : ''}`}
                  onClick={closeMobileMenu}
                >
                  <SimpleGlitchText>{t('contact')}</SimpleGlitchText>
                </a>
              </li>
            </ul>
            <div className="mobile-language">
              <LanguageToggle />
            </div>
          </div>
        </nav>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="mobile-menu-overlay" onClick={closeMobileMenu}></div>
        )}
      </div>
    </header>
  );
};

export default Header;