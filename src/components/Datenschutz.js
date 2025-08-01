import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LegalPages.css';

const Datenschutz = () => {
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
          <h1 className="legal-title">Datenschutzerklärung</h1>
          
          <div className="legal-section">
            <h2>1. Verantwortlicher</h2>
            <p>
              Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) und des 
              schweizerischen Datenschutzgesetzes (DSG) ist:
            </p>
            <div className="company-info">
              <p><strong>Zeqiri's Helvetia Pub</strong></p>
              <p>Ardian Zeqiri</p>
              <p>Behämsgasse 1</p>
              <p>3855 Brienz BE</p>
              <p>Schweiz</p>
              <p><strong>Telefon:</strong> +41 78 202 83 37</p>
              <p><strong>E-Mail:</strong> info@helvetiapub-brienz.ch</p>
            </div>
          </div>

          <div className="legal-section">
            <h2>2. Grundsätze der Datenverarbeitung</h2>
            <p>
              Personenbezogene Daten werden nach folgenden Grundsätzen verarbeitet:
            </p>
            <ul>
              <li>Verarbeitung nach Treu und Glauben und in einer für die betroffene Person nachvollziehbaren Weise</li>
              <li>Sammlung für festgelegte, eindeutige und legitime Zwecke</li>
              <li>Verarbeitung in einer Weise, die angemessen, relevant und auf das notwendige Maß beschränkt ist</li>
              <li>Speicherung nur so lange, wie es für die Zwecke erforderlich ist</li>
              <li>Verarbeitung in einer Weise, die angemessene Sicherheit gewährleistet</li>
            </ul>
          </div>

          <div className="legal-section">
            <h2>3. Datenerfassung beim Besuch unserer Website</h2>
            
            <h3>3.1 Server-Log-Dateien</h3>
            <p>
              Beim Besuch unserer Website werden automatisch folgende Informationen in sogenannten 
              Server-Log-Dateien gespeichert:
            </p>
            <ul>
              <li>IP-Adresse des zugreifenden Rechners</li>
              <li>Datum und Uhrzeit des Zugriffs</li>
              <li>Name und URL der abgerufenen Datei</li>
              <li>Website, von der aus der Zugriff erfolgt (Referrer-URL)</li>
              <li>Verwendeter Browser und ggf. das Betriebssystem Ihres Rechners</li>
              <li>Name Ihres Access-Providers</li>
            </ul>
            <p>
              Diese Daten werden zur Gewährleistung eines störungsfreien Betriebs der Website und zur 
              Verbesserung unseres Angebots ausgewertet. Die Rechtsgrundlage hierfür ist unser 
              berechtigtes Interesse (Art. 6 Abs. 1 lit. f DSGVO / Art. 31 Abs. 1 DSG).
            </p>

            <h3>3.2 Cookies</h3>
            <p>
              Unsere Website verwendet Cookies. Cookies sind kleine Textdateien, die von Ihrem Browser 
              auf Ihrem Endgerät zur Speicherung bestimmter Informationen abgelegt werden.
            </p>
            
            <h4>Arten von Cookies, die wir verwenden:</h4>
            
            <div className="cookie-section">
              <h5>Technisch notwendige Cookies</h5>
              <p>
                Diese Cookies sind für die Grundfunktionen der Website erforderlich und können nicht 
                deaktiviert werden. Sie werden nur als Reaktion auf von Ihnen getätigte Aktionen gesetzt.
              </p>
              <ul>
                <li><strong>Session-Cookies:</strong> Werden nach Ende der Browser-Sitzung automatisch gelöscht</li>
                <li><strong>Funktionale Cookies:</strong> Speichern Ihre Einstellungen und Präferenzen</li>
              </ul>
            </div>

            <div className="cookie-section">
              <h5>Analyse-Cookies (optional)</h5>
              <p>
                Diese Cookies helfen uns dabei, die Nutzung unserer Website zu analysieren und zu verbessern. 
                Sie sammeln Informationen darüber, wie Besucher die Website nutzen.
              </p>
              <ul>
                <li>Anzahl der Besucher und Seitenaufrufe</li>
                <li>Verweildauer auf der Website</li>
                <li>Navigation und Nutzerverhalten</li>
              </ul>
            </div>

            <h4>Ihre Cookie-Einstellungen</h4>
            <p>
              Sie können Ihre Cookie-Einstellungen jederzeit in Ihrem Browser verwalten:
            </p>
            <ul>
              <li>Alle Cookies akzeptieren</li>
              <li>Nur technisch notwendige Cookies akzeptieren</li>
              <li>Alle Cookies ablehnen (kann Funktionen der Website beeinträchtigen)</li>
            </ul>
            <p>
              Die Rechtsgrundlage für die Verwendung technisch notwendiger Cookies ist unser berechtigtes 
              Interesse (Art. 6 Abs. 1 lit. f DSGVO). Für alle anderen Cookies holen wir Ihre Einwilligung 
              ein (Art. 6 Abs. 1 lit. a DSGVO).
            </p>
          </div>

          <div className="legal-section">
            <h2>4. Kontaktaufnahme</h2>
            <p>
              Bei Kontaktaufnahme mit uns (z.B. per E-Mail, Telefon oder über Kontaktformular) werden 
              Ihre Angaben zur Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns 
              gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
            </p>
            <p>
              <strong>Verarbeitete Daten:</strong> Name, E-Mail-Adresse, Telefonnummer, Nachrichteninhalt, 
              Zeitpunkt der Kontaktaufnahme
            </p>
            <p>
              <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung) bzw. 
              Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Beantwortung Ihrer Anfrage)
            </p>
            <p>
              <strong>Speicherdauer:</strong> Die Daten werden gelöscht, sobald sie für die Erreichung 
              des Zweckes ihrer Erhebung nicht mehr erforderlich sind, spätestens jedoch nach 3 Jahren.
            </p>
          </div>

          <div className="legal-section">
            <h2>5. Google Maps</h2>
            <p>
              Auf unserer Website ist Google Maps zur Darstellung unseres Standorts eingebunden. 
              Google Maps wird von Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA 
              ("Google") betrieben.
            </p>
            <p>
              Durch die Nutzung von Google Maps können Informationen über die Benutzung dieser Website 
              einschließlich Ihrer IP-Adresse an Google übertragen werden. Diese Informationen werden 
              in der Regel an einen Server von Google in den USA übertragen und dort gespeichert.
            </p>
            <p>
              <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an 
              einer benutzerfreundlichen Darstellung unseres Standorts)
            </p>
            <p>
              Weitere Informationen zum Datenschutz bei Google finden Sie in der 
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
                Google Datenschutzerklärung
              </a>.
            </p>
          </div>

          <div className="legal-section">
            <h2>6. Ihre Rechte</h2>
            <p>Ihnen stehen folgende Rechte zu:</p>
            
            <div className="rights-section">
              <h3>6.1 Auskunftsrecht (Art. 15 DSGVO / Art. 25 DSG)</h3>
              <p>
                Sie haben das Recht, eine Bestätigung darüber zu verlangen, ob Sie betreffende 
                personenbezogene Daten verarbeitet werden.
              </p>

              <h3>6.2 Recht auf Berichtigung (Art. 16 DSGVO / Art. 32 DSG)</h3>
              <p>
                Sie haben das Recht, die unverzügliche Berichtigung Sie betreffender unrichtiger 
                personenbezogener Daten zu verlangen.
              </p>

              <h3>6.3 Recht auf Löschung (Art. 17 DSGVO / Art. 32 DSG)</h3>
              <p>
                Sie haben das Recht, die unverzügliche Löschung Sie betreffender personenbezogener 
                Daten zu verlangen.
              </p>

              <h3>6.4 Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</h3>
              <p>
                Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen 
                Daten zu verlangen.
              </p>

              <h3>6.5 Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</h3>
              <p>
                Sie haben das Recht, die Sie betreffenden personenbezogenen Daten in einem 
                strukturierten, gängigen und maschinenlesbaren Format zu erhalten.
              </p>

              <h3>6.6 Widerspruchsrecht (Art. 21 DSGVO)</h3>
              <p>
                Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, 
                jederzeit gegen die Verarbeitung Sie betreffender personenbezogener Daten Widerspruch 
                einzulegen.
              </p>

              <h3>6.7 Recht auf Widerruf der Einwilligung</h3>
              <p>
                Sie haben das Recht, eine erteilte Einwilligung jederzeit zu widerrufen. Der Widerruf 
                der Einwilligung berührt nicht die Rechtmäßigkeit der aufgrund der Einwilligung bis 
                zum Widerruf erfolgten Verarbeitung.
              </p>
            </div>

            <p>
              <strong>Kontakt für die Ausübung Ihrer Rechte:</strong><br />
              E-Mail: datenschutz@helvetiapub-brienz.ch<br />
              Telefon: +41 78 202 83 37
            </p>
          </div>

          <div className="legal-section">
            <h2>7. Beschwerderecht</h2>
            <p>
              Sie haben das Recht, sich bei einer Aufsichtsbehörde über die Verarbeitung Ihrer 
              personenbezogenen Daten durch uns zu beschweren.
            </p>
            <p>
              <strong>Zuständige Aufsichtsbehörde in der Schweiz:</strong><br />
              Eidgenössischer Datenschutz- und Öffentlichkeitsbeauftragte (EDÖB)<br />
              Feldeggweg 1<br />
              3003 Bern<br />
              Schweiz<br />
              Website: <a href="https://www.edoeb.admin.ch" target="_blank" rel="noopener noreferrer">
                www.edoeb.admin.ch
              </a>
            </p>
          </div>

          <div className="legal-section">
            <h2>8. Datensicherheit</h2>
            <p>
              Wir verwenden geeignete technische und organisatorische Sicherheitsmaßnahmen, um Ihre 
              Daten gegen zufällige oder vorsätzliche Manipulationen, teilweisen oder vollständigen 
              Verlust, Zerstörung oder gegen den unbefugten Zugriff Dritter zu schützen.
            </p>
            <p>
              Unsere Sicherheitsmaßnahmen werden entsprechend der technologischen Entwicklung 
              fortlaufend verbessert.
            </p>
          </div>

          <div className="legal-section">
            <h2>9. Änderung der Datenschutzerklärung</h2>
            <p>
              Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den 
              aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen 
              in der Datenschutzerklärung umzusetzen.
            </p>
            <p>
              Für Ihren erneuten Besuch gilt dann die neue Datenschutzerklärung.
            </p>
          </div>

          <div className="legal-section update-info">
            <p><strong>Stand:</strong> Januar 2025</p>
            <p><strong>Version:</strong> 1.0</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Datenschutz;