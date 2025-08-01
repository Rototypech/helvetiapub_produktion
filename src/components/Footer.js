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
                            <a href="tel:+41782028337" className="footer-link">
                  <svg 
                    style={{ width: '16px', height: '16px', marginRight: '6px', fill: 'currentColor', verticalAlign: 'middle' }} 
                    viewBox="0 0 24 24"
                  >
                    <path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z"/>
                  </svg>
                  Bestellen
                </a>
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