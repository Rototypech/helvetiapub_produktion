import React from 'react';
import './SimpleGlitchText.css';

const SimpleGlitchText = ({ children, className = "" }) => {
  return (
    <span 
      className={`glitch-text ${className}`} 
      data-text={children}
    >
      {children}
    </span>
  );
};

export default SimpleGlitchText;