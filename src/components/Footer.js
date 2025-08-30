import React, { useEffect, useRef } from 'react';
import './Footer.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ZenitsuImage from '../assets/Zenitsu.webp';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);
  const zenitsuRef = useRef(null);
  const shapeRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const footer = footerRef.current;
    const zenitsu = zenitsuRef.current;
    const shape = shapeRef.current;
    const content = contentRef.current;

    // Initial state - Zenitsu image starts below the shape
    gsap.set(zenitsu, {
      y: 270,
      opacity: 0,
      scale: 0.8
    });

    gsap.set(content, {
      opacity: 0,
      y: -50
    });

    // Create timeline for footer animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: footer,
        start: "top 30%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
        onEnter: () => {
          // Zenitsu animation - comes from below into the shape
          gsap.to(zenitsu, {
            y: 300,
            opacity: 1,
            scale: 1,
            duration: 1.2,
            ease: "back.out(1.7)",
            delay: 0.3
          });

          // Content fade in
          gsap.to(content, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            delay: 0.6
          });
        }
      }
    });

    // Floating animation for Zenitsu
    gsap.to(zenitsu, {
      y: 310,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: 1.5
    });

    // Cleanup
    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <footer id="contact" className="footer" ref={footerRef}>
      <div className="footer-background">
        <div className="lightning-effects"></div>
      </div>
      
      <div className="footer-container">
        <div className="footer-shape" ref={shapeRef}>
          <div className="zenitsu-container" ref={zenitsuRef}>
            <img src={ZenitsuImage} alt="Zenitsu" className="zenitsu-image" />
            <div className="electric-aura"></div>
          </div>
        </div>
        
        <div className="footer-content" ref={contentRef}>
          <div className="footer-main">
            <div className="footer-left">
              <h3 className="footer-title">Vamos Criar Algo Incrível Juntos</h3>
              <p className="footer-subtitle">
                Pronto para dar vida às suas ideias na velocidade da luz?
              </p>
              <div className="footer-social">
                <a href="https://github.com/DevZank" className="social-link">
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/isaacmjsilva" className="social-link">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://www.instagram.com/isaacdejesuss_" className="social-link">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
            
            <div className="footer-right">
              <div className="footer-nav">
                <div className="nav-column">
                  <h4>Navigation</h4>
                  <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">Sobre</a></li>
                    <li><a href="#projects">Projetos</a></li>
                    <li><a href="#contact">Contato</a></li>
                  </ul>
                </div>
                <div className="nav-column">
                  <h4>Serviços</h4>
                  <ul>
                    <li><a href="#">Desenvolvedor Web</a></li>
                    <li><a href="#">UI/UX Designer</a></li>
                    <li><a href="#">Aplicativos Mobile</a></li>
                    <li><a href="#">Analista</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <div className="footer-divider"></div>
            <div className="footer-credits">
              <p>&copy; 2025 DevZank Portfolio. Todos direitos reservados.</p>
              <p>Feito com ⚡ e muitos ☕</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;