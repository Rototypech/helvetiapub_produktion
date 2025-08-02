import React, { useState, useEffect } from 'react';
import './CookieBanner.css';

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    // Zawsze pokazuj banner (usuń localStorage check)
    setShowBanner(true);
  }, []);

  const acceptAll = () => {
    localStorage.setItem('helvetia-cookie-consent', JSON.stringify({
      necessary: true,
      analytics: true,
      marketing: false,
      timestamp: Date.now()
    }));
    setShowBanner(false);
  };

  const acceptNecessary = () => {
    localStorage.setItem('helvetia-cookie-consent', JSON.stringify({
      necessary: true,
      analytics: false,
      marketing: false,
      timestamp: Date.now()
    }));
    setShowBanner(false);
  };

  const saveSettings = (settings) => {
    localStorage.setItem('helvetia-cookie-consent', JSON.stringify({
      ...settings,
      necessary: true, // Always true
      timestamp: Date.now()
    }));
    setShowBanner(false);
    setShowSettings(false);
  };

  const openSettings = () => {
    setShowSettings(true);
  };

  if (!showBanner) return null;

  return (
    <>
      <div className="cookie-banner">
        <div className="cookie-content">
          <div className="cookie-text">
            <h3>🍪 Cookies & Datenschutz</h3>
            <p>
              Wir verwenden Cookies, um Ihnen die bestmögliche Nutzung unserer Website zu ermöglichen. 
              Technisch notwendige Cookies sind für die Funktionalität der Website erforderlich. 
              Zusätzliche Cookies helfen uns, die Website zu verbessern und Ihnen relevante Inhalte anzuzeigen.
            </p>
            <p>
              Weitere Informationen finden Sie in unserer{' '}
              <a href="/datenschutz" target="_blank" rel="noopener noreferrer">
                Datenschutzerklärung
              </a>.
            </p>
          </div>
          
          <div className="cookie-buttons">
            <button className="cookie-btn cookie-btn-necessary" onClick={acceptNecessary}>
              Nur notwendige
            </button>
            <button className="cookie-btn cookie-btn-settings" onClick={openSettings}>
              Einstellungen
            </button>
            <button className="cookie-btn cookie-btn-accept" onClick={acceptAll}>
              Alle akzeptieren
            </button>
          </div>
        </div>
      </div>

      {showSettings && (
        <CookieSettings 
          onSave={saveSettings} 
          onClose={() => setShowSettings(false)} 
        />
      )}
    </>
  );
};

const CookieSettings = ({ onSave, onClose }) => {
  const [settings, setSettings] = useState({
    necessary: true,
    analytics: false,
    marketing: false
  });

  const handleSave = () => {
    onSave(settings);
  };

  return (
    <div className="cookie-settings-overlay">
      <div className="cookie-settings">
        <div className="cookie-settings-header">
          <h3>Cookie-Einstellungen</h3>
          <button className="cookie-settings-close" onClick={onClose}>✕</button>
        </div>
        
        <div className="cookie-settings-content">
          <div className="cookie-category">
            <div className="cookie-category-header">
              <h4>Notwendige Cookies</h4>
              <label className="cookie-toggle">
                <input 
                  type="checkbox" 
                  checked={true} 
                  disabled 
                />
                <span className="cookie-slider disabled"></span>
              </label>
            </div>
            <p>
              Diese Cookies sind für die Grundfunktionen der Website erforderlich und können 
              nicht deaktiviert werden.
            </p>
          </div>

          <div className="cookie-category">
            <div className="cookie-category-header">
              <h4>Analyse-Cookies</h4>
              <label className="cookie-toggle">
                <input 
                  type="checkbox" 
                  checked={settings.analytics}
                  onChange={(e) => setSettings({...settings, analytics: e.target.checked})}
                />
                <span className="cookie-slider"></span>
              </label>
            </div>
            <p>
              Diese Cookies helfen uns, die Nutzung der Website zu verstehen und zu verbessern. 
              Sie sammeln anonyme Informationen über Seitenaufrufe und Nutzerverhalten.
            </p>
          </div>

          <div className="cookie-category">
            <div className="cookie-category-header">
              <h4>Marketing-Cookies</h4>
              <label className="cookie-toggle">
                <input 
                  type="checkbox" 
                  checked={settings.marketing}
                  onChange={(e) => setSettings({...settings, marketing: e.target.checked})}
                />
                <span className="cookie-slider"></span>
              </label>
            </div>
            <p>
              Diese Cookies werden verwendet, um Ihnen relevante Werbung und Inhalte zu zeigen. 
              Derzeit verwenden wir keine Marketing-Cookies.
            </p>
          </div>
        </div>

        <div className="cookie-settings-footer">
          <button className="cookie-btn cookie-btn-cancel" onClick={onClose}>
            Abbrechen
          </button>
          <button className="cookie-btn cookie-btn-save" onClick={handleSave}>
            Einstellungen speichern
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;