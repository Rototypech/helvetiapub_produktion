import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import BlurText from './BlurText';
import TextType from './TextType';
import MobileSlidingText from './MobileSlidingText';
import LightRaysReactBits from './LightRaysReactBits';
import { useTranslation } from '../hooks/useTranslation';
import './MobileSlidingText.css';

const HeroParallax = () => {
  const ref = useRef(null);
  const { t } = useTranslation();
  
  // Track scroll progress for this specific section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  // Transform scroll into parallax movement (background moves slower)
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.6]);

  return (
    <div 
      ref={ref} 
      id="home" 
      className="relative h-screen overflow-hidden"
      style={{ 
        position: 'relative', 
        height: '100vh', 
        overflow: 'hidden' 
      }}
    >
      {/* Parallax Background */}
      <motion.div
        className="absolute inset-0 w-full h-[120%]"
        style={{
          position: 'absolute',
          top: '-10%',
          left: 0,
          right: 0,
          bottom: '-10%',
          width: '100%',
          height: '120%',
          backgroundImage: "url('/images/helvetia-bar.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          y: backgroundY,
        }}
      />
      
      {/* Dark Overlay */}
      <motion.div 
        className="absolute inset-0 bg-black/50"
        style={{ 
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          opacity: opacity
        }}
      />

      {/* ReactBits Light Rays - Original */}
      <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}>
        <LightRaysReactBits
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
          className="hero-light-rays"
        />
      </div>
      
      
      {/* Content */}
      <div 
        className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center"
        style={{ 
          position: 'relative', 
          zIndex: 10, 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          justifyContent: 'center', 
          height: '100%', 
          padding: '0 1rem', 
          textAlign: 'center' 
        }}
      >
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-8"
          style={{ marginBottom: '2rem' }}
        >
          <img
            src="/images/logo.png"
            alt="Helvetia Pub Logo"
            className="hero-logo w-32 md:w-48 lg:w-52 max-w-[200px] h-auto mx-auto object-contain"
            style={{ 
              width: '120px',
              maxWidth: '200px',
              height: 'auto',
              margin: '0 auto',
              objectFit: 'contain',
              cursor: 'pointer',
              transition: 'transform 0.3s ease'
            }}
          />
        </motion.div>

        {/* Main Title with BlurText Animation */}
        <div style={{ marginBottom: '1rem' }}>
          <BlurText
            text={t('heroTitle')}
            delay={150}
            animateBy="words"
            direction="top"
            stepDuration={0.5}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-wider drop-shadow-2xl"
            style={{
              fontSize: '3rem',
              fontWeight: 'bold',
              fontFamily: 'Sansation, sans-serif',
              color: 'white',
              letterSpacing: '0.1em',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
              textAlign: 'center'
            }}
          />
        </div>

        {/* Subtitle with BlurText Animation */}
        <div style={{ marginBottom: '2rem' }}>
          <BlurText
            text={t('heroSubtitle')}
            delay={200}
            animateBy="words"
            direction="top"
            stepDuration={0.4}
            className="text-xl md:text-2xl lg:text-3xl text-white/90 font-light tracking-wide drop-shadow-lg"
            style={{
              fontSize: '1.5rem',
              color: 'rgba(255, 255, 255, 0.9)',
              fontWeight: '300',
              letterSpacing: '0.05em',
              textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)',
              textAlign: 'center'
            }}
          />
        </div>

        {/* Typewriter Animation with German Text - Desktop Only */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          style={{ marginBottom: '2.5rem' }}
          className="hidden md:block"
        >
          <TextType
            text={t('heroTypewriter')}
            typingSpeed={80}
            deletingSpeed={40}
            pauseDuration={3000}
            initialDelay={1500}
            loop={true}
            showCursor={true}
            cursorCharacter="|"
            cursorBlinkDuration={0.8}
            textColors={["#ffffff"]}
            className="text-xl md:text-2xl lg:text-4xl font-medium text-center"
            style={{
              fontFamily: 'Sansation, sans-serif',
              textShadow: '2px 2px 6px rgba(0, 0, 0, 0.9)',
              letterSpacing: '0.02em',
              minHeight: '80px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.8rem'
            }}
          />
        </motion.div>

        {/* Mobile Sliding Text Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          style={{ marginBottom: '2.5rem' }}
          className="block md:hidden"
        >
          <MobileSlidingText 
            text="Atmosphäre, Geschmack & gute Laune!"
            className="text-center"
          />
        </motion.div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <motion.a
            href="#menu"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            whileHover={{
              scale: 1.05,
              y: -2,
              boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            className="helvetia-button"
          >
{t('viewMenu')}
          </motion.a>

          <motion.a
            href="tel:+41782028337"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.0 }}
            whileHover={{
              scale: 1.05,
              y: -2,
              boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            className="helvetia-button helvetia-button-secondary"
            style={{
              background: 'linear-gradient(135deg, #4a7c59 0%, #2d5233 100%)',
              border: '2px solid #d4af37'
            }}
          >
            <svg 
              style={{ width: '20px', height: '20px', marginRight: '8px', fill: 'white' }} 
              viewBox="0 0 24 24"
            >
              <path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z"/>
            </svg>
            {t('orderPhone')}
          </motion.a>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-3 bg-white/70 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroParallax;