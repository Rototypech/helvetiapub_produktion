import React, { useEffect, useRef } from 'react';

const AuroraBackground = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let time = 0;

    // Set canvas size to cover full viewport
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      canvas.style.width = '100%';
      canvas.style.height = '100%';
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Aurora colors - elegant gold/green theme for Helvetia (barely visible)
    const colors = [
      { r: 212, g: 175, b: 55, alpha: 0.008 },  // Gold - barely visible
      { r: 74, g: 124, b: 89, alpha: 0.006 },   // Helvetia Green - barely visible
      { r: 255, g: 215, b: 0, alpha: 0.005 },   // Light Gold - barely visible
      { r: 34, g: 139, b: 34, alpha: 0.007 },   // Forest Green - barely visible
      { r: 218, g: 165, b: 32, alpha: 0.004 }   // Golden Rod - barely visible
    ];

    // Create aurora wave
    const createAuroraWave = (phase, amplitude, frequency, color) => {
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      
      // Create flowing aurora effect
      for (let i = 0; i <= 100; i++) {
        const progress = i / 100;
        const alpha = color.alpha * Math.sin(progress * Math.PI) * (0.5 + 0.5 * Math.sin(time * 0.002));
        
        gradient.addColorStop(
          progress, 
          `rgba(${color.r}, ${color.g}, ${color.b}, ${alpha * (1 - progress * 0.3)})`
        );
      }
      
      return gradient;
    };

    // Animation loop
    const animate = () => {
      // Clear canvas with subtle fade effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.01)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Create multiple aurora layers
      colors.forEach((color, index) => {
        const phase = time * 0.001 + index * 0.5;
        const amplitude = 50 + index * 20;
        const frequency = 3 + index * 0.5;
        
        // Create wave path
        ctx.beginPath();
        ctx.moveTo(0, canvas.height);
        
        for (let x = 0; x <= canvas.width; x += 2) {
          const progress = x / canvas.width;
          const wave1 = Math.sin(progress * frequency + phase) * amplitude;
          const wave2 = Math.sin(progress * frequency * 1.3 + phase * 1.2) * amplitude * 0.5;
          const y = canvas.height * 0.3 + wave1 + wave2;
          
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        
        // Complete the shape
        ctx.lineTo(canvas.width, canvas.height);
        ctx.lineTo(0, canvas.height);
        ctx.closePath();
        
        // Fill with aurora gradient
        ctx.fillStyle = createAuroraWave(phase, amplitude, frequency, color);
        ctx.fill();
        
        // Add glow effect (barely visible)
        ctx.shadowColor = `rgba(${color.r}, ${color.g}, ${color.b}, 0.02)`;
        ctx.shadowBlur = 5;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // Add floating aurora streams - cover full canvas
      for (let i = 0; i < 5; i++) {
        const streamPhase = time * 0.0008 + i * 1.5;
        const streamX = (canvas.width * 0.1) + (canvas.width * 0.8) * ((Math.sin(streamPhase) + 1) / 2);
        const streamY = (canvas.height * 0.1) + (canvas.height * 0.8) * ((Math.sin(streamPhase * 0.7 + i) + 1) / 2);
        
        const streamGradient = ctx.createRadialGradient(
          streamX, streamY, 0,
          streamX, streamY, 100 + i * 50
        );
        
        const streamColor = colors[i % colors.length];
        streamGradient.addColorStop(0, `rgba(${streamColor.r}, ${streamColor.g}, ${streamColor.b}, 0.01)`);
        streamGradient.addColorStop(0.5, `rgba(${streamColor.r}, ${streamColor.g}, ${streamColor.b}, 0.005)`);
        streamGradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        
        ctx.fillStyle = streamGradient;
        ctx.beginPath();
        ctx.arc(streamX, streamY, 120 + i * 40, 0, Math.PI * 2);
        ctx.fill();
      }

      time += 16; // ~60fps
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 3, // Between overlay and particles
        mixBlendMode: 'screen', // Blend mode for aurora effect
      }}
    />
  );
};

export default AuroraBackground;