import React, { useEffect, useRef } from 'react';
import './LoadingScreen.css';
import { gsap } from 'gsap';
import Logo from '../Logos/Logo.png';

const LoadingScreen = ({ fadeOut }) => {
  const logoRef = useRef(null);
  const spinnerRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const logoElement = logoRef.current;
    const spinnerElement = spinnerRef.current;
    
    // Simple check to ensure elements exist
    if (logoElement && spinnerElement) {
      // Start with visible elements
      gsap.set([logoElement, spinnerElement], { opacity: 1, scale: 1 });
      
      // Simple entrance animation
      const tl = gsap.timeline();
      
      tl.from(logoElement, {
        scale: 0.5,
        duration: 0.8,
        ease: "back.out(1.7)"
      })
      .from(spinnerElement, {
        scale: 0.5,
        duration: 0.6,
        ease: "back.out(1.7)"
      }, "-=0.4");

      // Continuous spinner rotation
      const spinAnimation = gsap.to(spinnerElement, {
        rotation: 360,
        duration: 2,
        repeat: -1,
        ease: "none"
      });

      return () => {
        tl.kill();
        spinAnimation.kill();
      };
    }
  }, []);

  // Animação de fade-out quando fadeOut prop é true
  useEffect(() => {
    if (fadeOut && containerRef.current) {
      gsap.to(containerRef.current, {
        opacity: 0,
        scale: 0.9,
        duration: 0.8,
        ease: "power2.inOut"
      });
    }
  }, [fadeOut]);

  return (
    <div className="loading-screen" ref={containerRef}>
      <div className="loading-container">
        <div className="logo-container" ref={logoRef}>
          <img 
            src={Logo} 
            alt="Logo" 
            className="loading-logo"
            onLoad={() => console.log('Logo loaded successfully')}
            onError={(e) => console.error('Logo failed to load:', e)}
          />
        </div>
        <div className="spinner-container" ref={spinnerRef}>
          <div className="spinner"></div>
        </div>
      </div>
      {/* Debug info */}
      <div style={{ position: 'absolute', bottom: '20px', color: 'white', fontSize: '12px' }}>
        Loading Portfolio...
      </div>
    </div>
  );
};

export default LoadingScreen;
