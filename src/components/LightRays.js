import React, { useEffect, useRef, useState } from 'react';

const LightRays = ({
  raysOrigin = "top-center",
  raysColor = "#00ffff",
  raysSpeed = 1.5,
  lightSpread = 0.8,
  rayLength = 1.2,
  followMouse = true,
  mouseInfluence = 0.1,
  noiseAmount = 0.1,
  distortion = 0.05,
  className = ""
}) => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let time = 0;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Mouse tracking for followMouse
    const handleMouseMove = (e) => {
      if (followMouse) {
        const rect = canvas.getBoundingClientRect();
        setMousePos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };

    canvas.addEventListener('mousemove', handleMouseMove);

    // Light ray configuration
    const rays = [];
    const numRays = 16;
    
    // Initialize rays
    for (let i = 0; i < numRays; i++) {
      rays.push({
        angle: (i / numRays) * Math.PI * 2,
        length: Math.random() * 400 + 300,
        opacity: Math.random() * 0.4 + 0.3,
        speed: Math.random() * 0.002 + 0.001,
        width: Math.random() * 2 + 1,
        noiseOffset: Math.random() * 1000
      });
    }

    // Parse hex color to RGB
    const hexToRgb = (hex) => {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      } : { r: 0, g: 255, b: 255 };
    };

    const color = hexToRgb(raysColor);

    // Noise function
    const noise = (x, y, z) => {
      return (Math.sin(x * 0.1) + Math.cos(y * 0.1) + Math.sin(z * 0.1)) * 0.5;
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Determine origin based on raysOrigin prop
      let originX, originY;
      switch (raysOrigin) {
        case "top-center":
          originX = canvas.width / 2;
          originY = -100;
          break;
        case "center":
          originX = canvas.width / 2;
          originY = canvas.height / 2;
          break;
        case "top-left":
          originX = -100;
          originY = -100;
          break;
        case "top-right":
          originX = canvas.width + 100;
          originY = -100;
          break;
        default:
          originX = canvas.width / 2;
          originY = -100;
      }

      // Mouse influence on origin
      if (followMouse && mouseInfluence > 0) {
        const mouseInfluenceX = (mousePos.x - canvas.width / 2) * mouseInfluence;
        const mouseInfluenceY = (mousePos.y - canvas.height / 2) * mouseInfluence;
        originX += mouseInfluenceX;
        originY += mouseInfluenceY;
      }
      
      // Draw light rays
      rays.forEach((ray, index) => {
        // Base angle with spread control
        const baseAngle = raysOrigin === "top-center" ? Math.PI / 2 : ray.angle;
        const spreadFactor = lightSpread * (raysOrigin === "top-center" ? 1.2 : 2);
        let currentAngle = baseAngle + (ray.angle - Math.PI) * spreadFactor * 0.5 + time * ray.speed * raysSpeed;
        
        // Add noise distortion
        if (noiseAmount > 0) {
          const noiseValue = noise(time * 0.01, ray.noiseOffset, index) * noiseAmount;
          currentAngle += noiseValue;
        }
        
        // Calculate end point with rayLength multiplier
        const distance = ray.length * rayLength;
        let endX = originX + Math.cos(currentAngle) * distance;
        let endY = originY + Math.sin(currentAngle) * distance;
        
        // Add distortion
        if (distortion > 0) {
          const distortionX = Math.sin(time * 0.005 + index) * distortion * 50;
          const distortionY = Math.cos(time * 0.005 + index) * distortion * 50;
          endX += distortionX;
          endY += distortionY;
        }
        
        // Create gradient for each ray
        const gradient = ctx.createLinearGradient(originX, originY, endX, endY);
        
        // Apply colors with opacity
        const baseOpacity = ray.opacity * (0.8 + 0.2 * Math.sin(time * 0.002));
        gradient.addColorStop(0, `rgba(${color.r}, ${color.g}, ${color.b}, ${baseOpacity * 0.9})`);
        gradient.addColorStop(0.3, `rgba(${color.r}, ${color.g}, ${color.b}, ${baseOpacity * 0.6})`);
        gradient.addColorStop(0.7, `rgba(${color.r}, ${color.g}, ${color.b}, ${baseOpacity * 0.3})`);
        gradient.addColorStop(1, `rgba(${color.r}, ${color.g}, ${color.b}, 0)`);
        
        ctx.strokeStyle = gradient;
        ctx.lineWidth = ray.width;
        ctx.lineCap = 'round';
        
        // Add glow effect
        ctx.shadowColor = `rgba(${color.r}, ${color.g}, ${color.b}, ${baseOpacity * 0.4})`;
        ctx.shadowBlur = 8;
        
        ctx.beginPath();
        ctx.moveTo(originX, originY);
        ctx.lineTo(endX, endY);
        ctx.stroke();
        
        ctx.shadowBlur = 0;
      });
      
      // Add origin glow
      const originGradient = ctx.createRadialGradient(
        originX, originY, 0,
        originX, originY, 200
      );
      
      const centralOpacity = 0.15 + 0.05 * Math.sin(time * 0.003);
      originGradient.addColorStop(0, `rgba(${color.r}, ${color.g}, ${color.b}, ${centralOpacity})`);
      originGradient.addColorStop(0.5, `rgba(${color.r}, ${color.g}, ${color.b}, ${centralOpacity * 0.5})`);
      originGradient.addColorStop(1, `rgba(${color.r}, ${color.g}, ${color.b}, 0)`);
      
      ctx.fillStyle = originGradient;
      ctx.beginPath();
      ctx.arc(originX, originY, 200, 0, Math.PI * 2);
      ctx.fill();
      
      time += 16;
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [raysOrigin, raysColor, raysSpeed, lightSpread, rayLength, followMouse, mouseInfluence, noiseAmount, distortion, mousePos]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 3,
        mixBlendMode: 'screen',
        pointerEvents: followMouse ? 'auto' : 'none'
      }}
    />
  );
};

export default LightRays;