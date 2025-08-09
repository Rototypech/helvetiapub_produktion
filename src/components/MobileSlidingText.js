import React from 'react';
import { motion } from 'framer-motion';

const MobileSlidingText = ({ text, className = "" }) => {
  return (
    <div className={`mobile-sliding-text ${className}`}>
      <motion.div
        className="sliding-text-container"
        initial={{ x: '-100vw' }}
        animate={{ x: '100vw' }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
          repeatDelay: 2
        }}
      >
        <span className="sliding-text">{text}</span>
      </motion.div>
    </div>
  );
};

export default MobileSlidingText;
