import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LegalPages.css';

const Impressum = () => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate('/');
  };

  return (
    <div className="legal-page">
      {/* Floating Close Button */}
      <button className="floating-close-btn" onClick={handleClose} aria-label="Close">
        <span className="close-icon">×</span>
      </button>
      
      <div className="container">
        <div className="legal-content">
          <h1 className="legal-title">Impressum</h1>
          
          <div className="legal-section">
            <h2>Angaben gemäß Art. 3 UWG (Gesetz gegen den unlauteren Wettbewerb)</h2>
            
            <div className="company-info">
              <h3>Betreiber der Website</h3>
              <p><strong>Zeqiri's Helvetia Pub</strong></p>
              <p>Einzelunternehmen</p>
              <p>Behämsgasse 1</p>
              <p>3855 Brienz BE</p>
              <p>Schweiz</p>
            </div>

            <div className="contact-info">
              <h3>Kontakt</h3>
              <p><strong>Telefon:</strong> +41 78 202 83 37</p>
              <p><strong>E-Mail:</strong> info@helvetiapub-brienz.ch</p>
            </div>

            <div className="registration-info">
              <h3>Handelsregister</h3>
              <p><strong>Handelsregisternummer:</strong> CH-036.1.102.273-3</p>
              <p><strong>UID:</strong> CHE-467.311.286</p>
              <p><strong>Handelsregisteramt:</strong> Kanton Bern</p>
              <p><strong>Rechtsform:</strong> Einzelunternehmen</p>
              <p><strong>Branche:</strong> Führen eines Gastgewerbebetriebs</p>
            </div>

            <div className="management-info">
              <h3>Geschäftsführung / Inhaber</h3>
              <p><strong>Inhaber:</strong> Ardian Zeqiri</p>
              <p><strong>Zeichnungsberechtigt:</strong> Blerina Zeqiri</p>
            </div>

            <div className="responsibility-info">
              <h3>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h3>
              <p>Ardian Zeqiri</p>
              <p>Behämsgasse 1</p>
              <p>3855 Brienz BE</p>
              <p>Schweiz</p>
            </div>
          </div>

          <div className="legal-section">
            <h2>Haftungsausschluss (Disclaimer)</h2>
            
            <div className="disclaimer-section">
              <h3>Haftung für Inhalte</h3>
              <p>
                Als Diensteanbieter sind wir gemäß Art. 93 Abs. 1 Fernmeldegesetz (FMG) für eigene Inhalte 
                auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach Art. 93 Abs. 2 FMG sind 
                wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde 
                Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige 
                Tätigkeit hinweisen.
              </p>
              <p>
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den 
                allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch 
                erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei 
                Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
              </p>
            </div>

            <div className="disclaimer-section">
              <h3>Haftung für Links</h3>
              <p>
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen 
                Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. 
                Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der 
                Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf 
                mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der 
                Verlinkung nicht erkennbar.
              </p>
            </div>

            <div className="disclaimer-section">
              <h3>Urheberrecht</h3>
              <p>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen 
                dem schweizerischen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede 
                Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen 
                Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind 
                nur für den privaten, nicht kommerziellen Gebrauch gestattet.
              </p>
            </div>
          </div>

          <div className="legal-section">
            <h2>Anwendbares Recht und Gerichtsstand</h2>
            <p>
              Es gilt ausschließlich schweizerisches Recht. Gerichtsstand ist Brienz BE, Schweiz, 
              soweit gesetzlich zulässig.
            </p>
          </div>

          <div className="legal-section">
            <h2>Online-Streitbeilegung (OS)</h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
              <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">
                https://ec.europa.eu/consumers/odr/
              </a>
            </p>
            <p>
              Wir sind nicht verpflichtet und grundsätzlich nicht bereit, an Streitbeilegungsverfahren 
              vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </div>

          <div className="legal-section update-info">
            <p><strong>Stand:</strong> Januar 2025</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impressum;