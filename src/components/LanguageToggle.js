import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './LanguageToggle.css';

const LanguageToggle = ({ className = "" }) => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <div className={`language-toggle ${className}`}>
      <button 
        className="language-toggle-button"
        onClick={toggleLanguage}
        aria-label="Switch language"
      >
        <div className="language-toggle-track">
          <div className={`language-toggle-slider ${language === 'en' ? 'active' : ''}`}></div>
          <div className="language-toggle-labels">
            <span className={`language-label left ${language === 'de' ? 'active' : ''}`}>DE</span>
            <span className={`language-label right ${language === 'en' ? 'active' : ''}`}>EN</span>
          </div>
        </div>
      </button>
    </div>
  );
};

export default LanguageToggle;