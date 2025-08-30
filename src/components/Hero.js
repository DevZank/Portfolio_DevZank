import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './Hero.css';
import ZenitsuPhoto from '../assets/ZenitsuPhoto.jpeg';

const Hero = () => {
  const heroCircleRef = useRef(null);

  useEffect(() => {
    const heroCircle = heroCircleRef.current;

    let floatingAnimation = null;

    if (heroCircle) {
      floatingAnimation = gsap.to(heroCircle, {
        y: -15,
        duration: 3,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1
      });
    }

    return () => {
      if (floatingAnimation) floatingAnimation.kill();
      gsap.killTweensOf(heroCircle);
    };
  }, []);
  return (
<section id="hero" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            <span className="title-line">Full Stack</span>
            <span className="title-line">Developer</span>
          </h1>
          <p className="hero-description">
            Criando soluções web modernas com a velocidade de um raio ⚡
          </p>
          <div className="hero-buttons">
            <a 
              href="https://github.com/DevZank?tab=repositories" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hero-btn primary"
            >
              Ver Projetos
            </a>
            <a 
              href="https://www.linkedin.com/in/isaacmjsilva" 
              target="_blank" 
              className="hero-btn secondary"
            >
              Contato
            </a>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="footer-shape-hero" ref={heroCircleRef}>
            <div className="zenitsu-container-hero">
              <img src={ZenitsuPhoto} alt="Zenitsu" className="zenitsu-image-hero"/>
              <div className="electric-aura"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
