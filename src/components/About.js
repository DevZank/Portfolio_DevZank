import React, { useEffect, useRef } from 'react';
import './About.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ZenitsuWowImage from '../assets/ZenitsuWow.png';
import Angular from '../icones/Angular.png';
import Astro from '../icones/Astro.png';
import CSharp from '../icones/CSharp.png';
import Figma from '../icones/Figma.png';
import Github from '../icones/Github.png';
import Java from '../icones/Java.png';
import React2 from '../icones/React.png';
import Python from '../icones/Python.png';
import Js from '../icones/Js.png';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutRef = useRef(null);
  const zenitsuRef = useRef(null);
  const textRef = useRef(null);
  const techIconsRef = useRef([]);

  // Tech stack data - matching the new green reference image
  const techStack = [
    { name: 'Git', color: '#00D884', icon: 'git' },
    { name: 'React', color: '#00D884', icon: 'React' },
    { name: 'JavaScript', color: '#00D884', icon: 'js' },
    { name: 'Database', color: '#00D884', icon: 'DB' },
    { name: 'Java', color: '#00D884', icon: 'Java' },
    { name: 'Database2', color: '#00D884', icon: 'DB' },
    { name: 'Angular', color: '#00D884', icon: 'A' },
    { name: 'Cloud', color: '#00D884', icon: 'Cloud' },
    { name: 'Figma', color: '#00D884', icon: 'Fig' },
    { name: 'GitHub', color: '#00D884', icon: 'GH' }
  ];

  useEffect(() => {
    const about = aboutRef.current;
    const zenitsu = zenitsuRef.current;
    const text = textRef.current;
    const techIcons = techIconsRef.current;

    // Initial setup
    gsap.set(text, { x: -100, opacity: 0 });
    gsap.set(zenitsu, { scale: 0, rotation: -180 });
    gsap.set(techIcons, { scale: 0, opacity: 0 });

    // ScrollTrigger animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: about,
        start: "top 70%",
        end: "bottom 30%",
        toggleActions: "play none none reverse"
      }
    });

    // Animate text from left
    tl.to(text, {
      x: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.out"
    });

    // Animate Zenitsu image
    tl.to(zenitsu, {
      scale: 1,
      rotation: 0,
      duration: 1.2,
      ease: "elastic.out(1, 0.5)"
    }, "-=0.5");

    // Animate tech icons with stagger
    tl.to(techIcons, {
      scale: 1,
      opacity: 1,
      duration: 0.6,
      ease: "back.out(1.7)",
      stagger: 0.1
    }, "-=0.3");

    // Individual floating animations for tech icons - keeping them in place
    techIcons.forEach((icon, index) => {
      if (icon) {
        gsap.to(icon, {
          y: -8,
          duration: 2 + (index * 0.3),
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: index * 0.2
        });
      }
    });

    // Zenitsu floating animation
    gsap.to(zenitsu, {
      y: -15,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    // Cleanup
    return () => {
      tl.kill();
      gsap.killTweensOf([zenitsu, ...techIcons]);
    };
  }, []);

  const addToTechRefs = (el, index) => {
    if (el && !techIconsRef.current.includes(el)) {
      techIconsRef.current[index] = el;
    }
  };

  return (
    <section id="about" className="about" ref={aboutRef}>
      <div className="about-container">
        <div className="about-content">
          {/* Left Side - Information */}
          <div className="about-info" ref={textRef}>
            <h2 className="about-title">
              Sobre <span className="title-highlight">Mim</span>
            </h2>
            
            <div className="info-card">
              <h3 className="info-subtitle">👨‍💻 Desenvolvedor Full Stack</h3>
              <p className="about-description">
                Desenvolvedor apaixonado por criar soluções web modernas e eficientes. 
                Com experiência em múltiplas tecnologias, busco sempre entregar código 
                limpo e performático, com a velocidade e precisão de um raio ⚡
              </p>
            </div>

            <div className="info-card">
              <h3 className="info-subtitle">🚀 Experiência & Projetos</h3>
              <p className="about-description">
                Mais de <strong>101 repositórios no GitHub</strong> demonstrando minha 
                jornada de aprendizado contínuo e paixão pela programação. Especializado 
                em React, JavaScript e Python.
              </p>
            </div>

            <div className="info-card">
              <h3 className="info-subtitle">⚡ Filosofia de Trabalho</h3>
              <p className="about-description">
                Acredito que código bem escrito é como um raio: <strong>rápido, preciso e impactante</strong>. 
                Sempre em busca de aprender novas tecnologias e melhorar continuamente.
              </p>
            </div>

            <div className="stats-grid">
              <div className="stat-item">
                <span className="stat-number">101+</span>
                <span className="stat-label">Repositórios</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">8+</span>
                <span className="stat-label">Tecnologias</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">Constante</span>
                <span className="stat-label">Aprendizado</span>
              </div>
            </div>
          </div>

          <div className="about-visual">
            <div className="tech-icon tech-git" ref={(el) => addToTechRefs(el, 0)} title="Git">
              <div className="tech-icon-content" style={{'--color': '#00D884'}}>
                <img src={Github} className="tech-emoji" />
              </div>
            </div>

            <div className="tech-icon tech-react" ref={(el) => addToTechRefs(el, 1)} title="React">
              <div className="tech-icon-content" style={{'--color': '#00D884'}}>
                <img src={React2} className="tech-emoji" />
              </div>
            </div>

            <div className="tech-icon tech-js" ref={(el) => addToTechRefs(el, 2)} title="JavaScript">
              <div className="tech-icon-content" style={{'--color': '#00D884'}}>
                <img src={Js} className="tech-emoji" />
              </div>
            </div>

            <div className="tech-icon tech-db1" ref={(el) => addToTechRefs(el, 3)} title="Database">
              <div className="tech-icon-content" style={{'--color': '#00D884'}}>
                <img src={Astro} className="tech-emoji" />
              </div>
            </div>

            <div className="tech-icon tech-java" ref={(el) => addToTechRefs(el, 4)} title="Java">
              <div className="tech-icon-content" style={{'--color': '#00D884'}}>
                <img src={Java} className="tech-emoji" />
              </div>
            </div>

            {/* Bottom Row */}
            <div className="tech-icon tech-db2" ref={(el) => addToTechRefs(el, 5)} title="Database">
              <div className="tech-icon-content" style={{'--color': '#00D884'}}>
                <img src={CSharp} className="tech-emoji" />
              </div>
            </div>

            <div className="tech-icon tech-angular" ref={(el) => addToTechRefs(el, 6)} title="Angular">
              <div className="tech-icon-content" style={{'--color': '#00D884'}}>
                <img src={Angular} className="tech-emoji" />
              </div>
            </div>

            <div className="tech-icon tech-cloud" ref={(el) => addToTechRefs(el, 7)} title="Cloud">
              <div className="tech-icon-content" style={{'--color': '#00D884'}}>
                <img src={Python} className="tech-emoji" />
              </div>
            </div>

            <div className="tech-icon tech-figma" ref={(el) => addToTechRefs(el, 8)} title="Figma">
              <div className="tech-icon-content" style={{'--color': '#00D884'}}>
                <img src={Figma} className="tech-emoji" />
              </div>
            </div>
            
            {/* Central Zenitsu Image - replacing the code symbol */}
            <div className="zenitsu-container" ref={zenitsuRef}>
              <img 
                src={ZenitsuWowImage} 
                alt="Zenitsu Wow" 
                className="zenitsu-image" 
              />
              <div className="zenitsu-aura"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
