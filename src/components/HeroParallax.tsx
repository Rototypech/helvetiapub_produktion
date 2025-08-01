import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const HeroParallax = () => {
  const ref = useRef<HTMLDivElement>(null);
  
  // Track scroll progress for this specific section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  // Transform scroll into parallax movement (background moves slower)
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.6]);

  return (
    <div ref={ref} id="home" className="relative h-screen overflow-hidden">
      {/* Parallax Background */}
      <motion.div
        className="absolute inset-0 w-full h-[120%]"
        style={{
          backgroundImage: "url('/images/helvetia-bar.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          y: backgroundY,
        }}
      />
      
      {/* Dark Overlay */}
      <motion.div 
        className="absolute inset-0 bg-black/50"
        style={{ opacity }}
      />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-8"
        >
          <img
            src="/images/logo.png"
            alt="Helvetia Pub Logo"
            className="w-32 md:w-48 lg:w-52 max-w-[200px] h-auto mx-auto object-contain"
          />
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold font-serif text-white mb-4 tracking-wider drop-shadow-2xl"
        >
          HELVETIA PUB
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-12 font-light tracking-wide drop-shadow-lg"
        >
          In Brienz
        </motion.p>

        {/* CTA Button */}
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
          className="inline-block bg-helvetia-green hover:bg-helvetia-green/90 text-white font-semibold text-base md:text-lg px-8 md:px-10 py-4 md:py-5 rounded-full uppercase tracking-wider transition-all duration-300 shadow-xl hover:shadow-2xl border border-white/10"
        >
          Speisekarte ansehen
        </motion.a>

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