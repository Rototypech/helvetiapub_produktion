import React, { useEffect, useRef } from 'react';

const LightRaysSides = () => {
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

    // Light ray configuration for both sides
    const leftRays = [];
    const rightRays = [];
    const numRaysPerSide = 8;
    
    // Initialize left side rays
    for (let i = 0; i < numRaysPerSide; i++) {
      leftRays.push({
        angle: (i / numRaysPerSide) * Math.PI * 2.0, // Light Spread: 2 (wider)
        length: Math.random() * 900 + 600, // Ray Length: 3 (longer)
        opacity: Math.random() * 0.3 + 0.15,
        speed: Math.random() * 0.006 + 0.003, // Rays Speed: 3 (faster)
        width: Math.random() * 3 + 1.5
      });
    }

    // Initialize right side rays  
    for (let i = 0; i < numRaysPerSide; i++) {
      rightRays.push({
        angle: Math.PI - (i / numRaysPerSide) * Math.PI * 2.0, // Light Spread: 2 (wider)
        length: Math.random() * 900 + 600, // Ray Length: 3 (longer)
        opacity: Math.random() * 0.3 + 0.15,
        speed: Math.random() * 0.006 + 0.003, // Rays Speed: 3 (faster)
        width: Math.random() * 3 + 1.5
      });
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Left side point
      const leftX = -100;
      const leftY = canvas.height / 2;
      
      // Right side point
      const rightX = canvas.width + 100;
      const rightY = canvas.height / 2;
      
      // Draw left side rays
      leftRays.forEach((ray, index) => {
        const currentAngle = ray.angle + Math.sin(time * ray.speed) * 0.1;
        const endX = leftX + Math.cos(currentAngle) * ray.length;
        const endY = leftY + Math.sin(currentAngle) * ray.length;
        
        // Create gradient for each ray
        const gradient = ctx.createLinearGradient(leftX, leftY, endX, endY);
        
        // Golden light colors - Saturation: 1, Pulsating enabled
        const pulsation = 0.7 + 0.3 * Math.sin(time * 0.003 + index); // Pulsating effect
        const baseOpacity = ray.opacity * pulsation;
        gradient.addColorStop(0, `rgba(255, 215, 0, ${baseOpacity * 0.9})`); // Gold - Saturation: 1
        gradient.addColorStop(0.2, `rgba(255, 215, 0, ${baseOpacity * 0.7})`); // Fade Distance: 2
        gradient.addColorStop(0.5, `rgba(218, 165, 32, ${baseOpacity * 0.4})`);
        gradient.addColorStop(1, 'rgba(212, 175, 55, 0)'); // Complete fade
        
        ctx.strokeStyle = gradient;
        ctx.lineWidth = ray.width;
        ctx.lineCap = 'round';
        
        // Add glow effect
        ctx.shadowColor = `rgba(212, 175, 55, ${baseOpacity * 0.4})`;
        ctx.shadowBlur = 6;
        
        ctx.beginPath();
        ctx.moveTo(leftX, leftY);
        ctx.lineTo(endX, endY);
        ctx.stroke();
        
        ctx.shadowBlur = 0;
      });

      // Draw right side rays
      rightRays.forEach((ray, index) => {
        const currentAngle = ray.angle + Math.sin(time * ray.speed + Math.PI) * 0.1;
        const endX = rightX + Math.cos(currentAngle) * ray.length;
        const endY = rightY + Math.sin(currentAngle) * ray.length;
        
        // Create gradient for each ray
        const gradient = ctx.createLinearGradient(rightX, rightY, endX, endY);
        
        // Golden light colors - Saturation: 1, Pulsating enabled
        const pulsation = 0.7 + 0.3 * Math.sin(time * 0.003 + index + Math.PI); // Pulsating effect
        const baseOpacity = ray.opacity * pulsation;
        gradient.addColorStop(0, `rgba(255, 215, 0, ${baseOpacity * 0.9})`); // Gold - Saturation: 1
        gradient.addColorStop(0.2, `rgba(255, 215, 0, ${baseOpacity * 0.7})`); // Fade Distance: 2
        gradient.addColorStop(0.5, `rgba(218, 165, 32, ${baseOpacity * 0.4})`);
        gradient.addColorStop(1, 'rgba(212, 175, 55, 0)'); // Complete fade
        
        ctx.strokeStyle = gradient;
        ctx.lineWidth = ray.width;
        ctx.lineCap = 'round';
        
        // Add glow effect
        ctx.shadowColor = `rgba(212, 175, 55, ${baseOpacity * 0.4})`;
        ctx.shadowBlur = 6;
        
        ctx.beginPath();
        ctx.moveTo(rightX, rightY);
        ctx.lineTo(endX, endY);
        ctx.stroke();
        
        ctx.shadowBlur = 0;
      });
      
      // Add left side glow
      const leftGradient = ctx.createRadialGradient(
        0, leftY, 0,
        0, leftY, 200
      );
      
      const leftOpacity = (0.15 + 0.08 * Math.sin(time * 0.003)) * 1.0; // Pulsating + Saturation: 1
      leftGradient.addColorStop(0, `rgba(255, 215, 0, ${leftOpacity})`);
      leftGradient.addColorStop(0.2, `rgba(255, 215, 0, ${leftOpacity * 0.7})`); // Fade Distance: 2
      leftGradient.addColorStop(1, 'rgba(212, 175, 55, 0)');
      
      ctx.fillStyle = leftGradient;
      ctx.beginPath();
      ctx.arc(0, leftY, 200, 0, Math.PI * 2);
      ctx.fill();

      // Add right side glow
      const rightGradient = ctx.createRadialGradient(
        canvas.width, rightY, 0,
        canvas.width, rightY, 200
      );
      
      const rightOpacity = (0.15 + 0.08 * Math.sin(time * 0.003 + Math.PI)) * 1.0; // Pulsating + Saturation: 1
      rightGradient.addColorStop(0, `rgba(255, 215, 0, ${rightOpacity})`);
      rightGradient.addColorStop(0.2, `rgba(255, 215, 0, ${rightOpacity * 0.7})`); // Fade Distance: 2
      rightGradient.addColorStop(1, 'rgba(212, 175, 55, 0)');
      
      ctx.fillStyle = rightGradient;
      ctx.beginPath();
      ctx.arc(canvas.width, rightY, 200, 0, Math.PI * 2);
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

export default LightRaysSides;