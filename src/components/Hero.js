import React from 'react';
import './Hero.css';

const Hero = () => {
  const heroStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('/images/helvetia-bar.png'), linear-gradient(135deg, #8B4513 0%, #A0522D 25%, #CD853F 50%, #D2691E 75%, #8B4513 100%)`,
    backgroundSize: 'cover, cover',
    backgroundPosition: 'center, center'
  };

  return (
    <section id="home" className="hero">
      <div className="hero-background" style={heroStyle}>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">HELVETIA PUB</h1>
            <p className="hero-subtitle">In Brienz</p>
            <p className="hero-description">ÜBER 100 JAHRE GESCHICHTE</p>
            <a href="#menu" className="hero-button">SPEISENKARTE ANSEHEN</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;