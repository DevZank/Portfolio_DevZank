import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ZenitsuJob from '../assets/ZenitsuJob.png'
import './Experience.css';

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const titleRef = useRef(null);
  const jobCardsRef = useRef([]);

  useEffect(() => {
    const container = containerRef.current;
    const image = imageRef.current;
    const content = contentRef.current;
    const title = titleRef.current;
    const jobCards = jobCardsRef.current;

    // Initial state
    gsap.set([image, content, title], { opacity: 0, y: 50 });
    gsap.set(jobCards, { opacity: 0, x: 100 });

    // Main animation timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    // Animate title first
    tl.to(title, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out"
    })
    // Then animate image and content
    .to([image, content], {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power3.out",
      stagger: 0.2
    }, "-=0.5")
    // Finally animate job cards
    .to(jobCards, {
      opacity: 1,
      x: 0,
      duration: 0.8,
      ease: "power2.out",
      stagger: 0.15
    }, "-=0.8");

    // Hover animations for job cards
    jobCards.forEach(card => {
      if (card) {
        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            scale: 1.02,
            y: -5,
            duration: 0.3,
            ease: "power2.out"
          });
        });

        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            scale: 1,
            y: 0,
            duration: 0.3,
            ease: "power2.out"
          });
        });
      }
    });

    // Cleanup
    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const addToJobCardsRefs = (el) => {
    if (el && !jobCardsRef.current.includes(el)) {
      jobCardsRef.current.push(el);
    }
  };

  return (
    <section id="experience" className="experience" ref={containerRef}>
      <div className="experience-container">
        <h2 className="section-title" ref={titleRef}>Experiência profissional</h2>
        
        <div className="experience-content">
          <div className="experience-image" ref={imageRef}>
            <img 
              src={ZenitsuJob}
              alt="Zenitsu Professional" 
              className="zenitsu-job-img"
            />
          </div>
          
          <div className="experience-info" ref={contentRef}>
            <div 
              className="job-card current-job" 
              ref={addToJobCardsRefs}
            >
              <div className="job-header">
                <h3 className="job-title">Estágiario de Produtos @ Itaú Unibanco</h3>
                <span className="job-period">2024 - Presente</span>
              </div>
              
              <div className="job-details">
                <div className="job-location">
                  <span className="location-icon">📍</span>
                  <span>São Paulo, Brasil</span>
                  <a href='https://www.itau.com.br' target='_blank' className="website-link">🔗 itau.com.br</a>
                </div>
                
                <p className="job-description">
                  Ser estagiário de Produtos no Itaú tem sido uma experiência transformadora. Desde o primeiro dia, pude perceber como o ambiente é dinâmico, colaborativo e voltado para o aprendizado constante. Cada projeto traz novos desafios, que me permitem aprender a cada dia.
                </p>
                
                <div className="job-logo">
                  <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Ita%C3%BA_Unibanco_logo_2023.svg/1200px-Ita%C3%BA_Unibanco_logo_2023.svg.png' className="company-logo"/>
                </div>
                
                <div className="tech-stack">
                  <span className="tech-tag">Office</span>
                  <span className="tech-tag">Análise de Dados</span>
                  <span className="tech-tag">Scrum</span>
                  <span className="tech-tag">Comunicação</span>
                  <span className="tech-tag">Produtação</span>
                </div>
              </div>
            </div>

            <div 
              className="job-card expandable" 
              ref={addToJobCardsRefs}
            >
              <div className="job-header">
                <h3 className="job-title">Fundador @ QUATTRO</h3>
                <a href='https://www.linkedin.com/company/quattrolearn' target='_blank' className="website-link">🔗 Quattro</a>
                <span className="job-period">2025 - Presente</span>
                <span className="expand-icon">+</span>
              </div>
            </div>

            <div 
              className="job-card expandable" 
              ref={addToJobCardsRefs}
            >
              <div className="job-header">
                <h3 className="job-title">Co-Fundador @ LifeBand</h3>
                <a href='https://www.linkedin.com/company/life-band' target='_blank' className="website-link">🔗 LifeBand</a>
                <span className="job-period">2024-2024</span>
                <span className="expand-icon">+</span>
              </div>
            </div>

            <div 
              className="job-card expandable" 
              ref={addToJobCardsRefs}
            >
              <div className="job-header">
                <h3 className="job-title">Co-Fundador @ iDUC</h3>
                <a href='https://www.linkedin.com/company/iduc' target='_blank' className="website-link">🔗 iDUC</a>
                <span className="job-period">2022 - 2023</span>
                <span className="expand-icon">+</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;