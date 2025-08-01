import React, { useEffect, useState } from 'react';
import './OpeningHours.css';
import LightRays from './LightRaysReactBits';
import SimpleGlitchText from './SimpleGlitchText';
import { useTranslation } from '../hooks/useTranslation';

const OpeningHours = () => {
  const [currentDay, setCurrentDay] = useState('');
  const { t } = useTranslation();
  
  const hours = [
    { day: 'Montag', hours: 'Geschlossen', status: 'closed' },
    { day: 'Dienstag', hours: '17:00 - 23:30', status: 'open' },
    { day: 'Mittwoch', hours: '17:00 - 23:30', status: 'open' },
    { day: 'Donnerstag', hours: '17:00 - 23:30', status: 'open' },
    { day: 'Freitag', hours: '17:00 - 00:30', status: 'open' },
    { day: 'Samstag', hours: '17:00 - 00:30', status: 'open' },
    { day: 'Sonntag', hours: 'Geschlossen', status: 'closed' }
  ];

  useEffect(() => {
    const today = new Date();
    const days = ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'];
    setCurrentDay(days[today.getDay()]);
  }, []);

  // Note: currentDay is already set in the useEffect above

  const backgroundStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('/images/helvetia-front.png'), linear-gradient(45deg, #2C3E50 0%, #34495E 25%, #5D6D7E 50%, #85929E 75%, #2C3E50 100%)`,
    backgroundSize: 'cover, cover',
    backgroundPosition: 'center, center'
  };

  return (
    <section id="hours" className="opening-hours">
      <div className="hours-background" style={backgroundStyle}>
        {/* ReactBits Light Rays - Identical to Hero */}
        <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}>
          <LightRays
            raysOrigin="top-center"
            raysColor="#d4af37"
            raysSpeed={1}
            lightSpread={2}
            rayLength={3}
            pulsating={true}
            fadeDistance={2}
            saturation={1}
            followMouse={true}
            mouseInfluence={0.6}
            noiseAmount={0}
            distortion={0}
            className="opening-hours-light-rays"
          />
        </div>
        <div className="hours-overlay"></div>
        <div className="container">
          <h2 className="section-title">
            <SimpleGlitchText>{t('hoursTitle')}</SimpleGlitchText>
          </h2>
          <div className="hours-table">
            {hours.map((item, index) => (
              <div key={index} className={`hours-row ${item.status} ${item.day === currentDay ? 'current-day' : ''}`}>
                <div className="day">{item.day}</div>
                <div className="time">{item.hours}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpeningHours;