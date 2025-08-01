import React, { useEffect, useRef } from 'react';

const LightRaysBackground = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

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

    // Light ray configuration
    const rays = [];
    const numRays = 12;
    
    // Initialize rays - spread from top
    for (let i = 0; i < numRays; i++) {
      rays.push({
        angle: (i / numRays) * Math.PI * 2,
        length: Math.random() * 1200 + 900, // Ray Length: 3 (longer rays)
        opacity: Math.random() * 0.3 + 0.2,
        speed: Math.random() * 0.006 + 0.003, // Rays Speed: 3 (faster)
        width: Math.random() * 3 + 1.5
      });
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Top center point - rays from above
      const centerX = canvas.width / 2;
      const centerY = -200; // Above the screen
      
      // Draw light rays from top
      rays.forEach((ray, index) => {
        // Rays spread downward from top center
        const angleSpread = 2.0; // Light Spread: 2 (wider spread)
        const baseAngle = Math.PI / 2; // 90 degrees (downward)
        const currentAngle = baseAngle + (ray.angle - Math.PI) * angleSpread * 0.5 + time * ray.speed;
        
        const endX = centerX + Math.cos(currentAngle) * ray.length;
        const endY = centerY + Math.sin(currentAngle) * ray.length;
        
        // Create gradient for each ray
        const gradient = ctx.createLinearGradient(centerX, centerY, endX, endY);
        
        // Golden light colors - Saturation: 1, Pulsating enabled
        const pulsation = 0.7 + 0.3 * Math.sin(time * 0.003); // Pulsating effect
        const baseOpacity = ray.opacity * pulsation;
        gradient.addColorStop(0, `rgba(255, 215, 0, ${baseOpacity * 0.9})`); // Gold - Saturation: 1
        gradient.addColorStop(0.2, `rgba(255, 215, 0, ${baseOpacity * 0.7})`); // Fade Distance: 2 (shorter fade)
        gradient.addColorStop(0.5, `rgba(218, 165, 32, ${baseOpacity * 0.4})`);
        gradient.addColorStop(1, 'rgba(212, 175, 55, 0)'); // Complete fade
        
        ctx.strokeStyle = gradient;
        ctx.lineWidth = ray.width;
        ctx.lineCap = 'round';
        
        // Add glow effect
        ctx.shadowColor = `rgba(212, 175, 55, ${baseOpacity * 0.5})`;
        ctx.shadowBlur = 8;
        
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(endX, endY);
        ctx.stroke();
        
        ctx.shadowBlur = 0;
      });
      
      // Add top glow - like sun above
      const topGradient = ctx.createRadialGradient(
        centerX, 0, 0,
        centerX, 0, 300
      );
      
      const centralOpacity = (0.2 + 0.1 * Math.sin(time * 0.003)) * 1.0; // Pulsating + Saturation: 1
      topGradient.addColorStop(0, `rgba(255, 215, 0, ${centralOpacity})`);
      topGradient.addColorStop(0.2, `rgba(255, 215, 0, ${centralOpacity * 0.8})`); // Fade Distance: 2
      topGradient.addColorStop(0.5, `rgba(218, 165, 32, ${centralOpacity * 0.5})`);
      topGradient.addColorStop(1, 'rgba(212, 175, 55, 0)');
      
      ctx.fillStyle = topGradient;
      ctx.beginPath();
      ctx.arc(centerX, 0, 300, 0, Math.PI * 2);
      ctx.fill();
      
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
        zIndex: 3,
        mixBlendMode: 'screen'
      }}
    />
  );
};

export default LightRaysBackground;