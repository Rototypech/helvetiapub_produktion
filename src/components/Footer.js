import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <span className="logo-text">HELVETIA PUB</span>
          </div>
          <div className="footer-links">
            <Link to="/impressum" className="footer-link">Impressum</Link>
            <Link to="/datenschutz" className="footer-link">Datenschutz</Link>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="copyright">© 2025 Zeqiri's Helvetia Pub. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;