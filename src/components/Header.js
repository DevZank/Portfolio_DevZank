import React, { useEffect, useRef } from 'react';
import './Header.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import LogoMarca from '../Logos/Logo.png';
import HomeIcon from '../assets/HeaderIcons/Home.png';
import AboutIcon from '../assets/HeaderIcons/About.png';
import ProjectsIcon from '../assets/HeaderIcons/Projects.png';
import ContactIcon from '../assets/HeaderIcons/Contact.png';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const Header = () => {
  const headerRef = useRef(null);
  const logoRef = useRef(null);
  const navIconsRef = useRef([]);

  useEffect(() => {
    const header = headerRef.current;
    const logo = logoRef.current;
    const navIcons = navIconsRef.current;

    // Initially hide the header
    gsap.set(header, {
      x: -120,
      opacity: 0
    });

    // Create scroll trigger for header animation
    ScrollTrigger.create({
      trigger: "#hero",
      start: "bottom 95%",
      end: "bottom top",
      onEnter: () => {
        // Show header with staggered animation
        gsap.to(header, {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "back.out(1.7)"
        });

        // Animate logo first
        gsap.fromTo(logo, 
          { scale: 0, rotation: -180 },
          { 
            scale: 1, 
            rotation: 0, 
            duration: 0.6, 
            ease: "elastic.out(1, 0.3)",
            delay: 0.3
          }
        );

        // Stagger animation for nav icons
        gsap.fromTo(navIcons,
          { scale: 0, y: 50, opacity: 0 },
          {
            scale: 1,
            y: 0,
            opacity: 1,
            duration: 0.5,
            ease: "back.out(1.7)",
            stagger: 0.1,
            delay: 0.5
          }
        );
      },
      onLeaveBack: () => {
        // Hide header when scrolling back to hero
        gsap.to(header, {
          x: -120,
          opacity: 0,
          duration: 0.4,
          ease: "power2.in"
        });
      }
    });

    // Floating animations for nav icons
    navIcons.forEach((icon, index) => {
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

    // Logo floating animation
    gsap.to(logo, {
      y: -6,
      rotation: 5,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      gsap.killTweensOf([header, logo, ...navIcons]);
    };
  }, []);

  const addToRefs = (el, index) => {
    if (el && !navIconsRef.current.includes(el)) {
      navIconsRef.current[index] = el;
    }
  };

  const handleNavClick = (sectionId, buttonElement) => {
    // Add visual feedback for the clicked button
    if (buttonElement) {
      gsap.to(buttonElement, {
        scale: 0.9,
        duration: 0.1,
        ease: "power2.out",
        yoyo: true,
        repeat: 1
      });
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      // Calculate the target position with some offset for better visual positioning
      const offsetTop = element.offsetTop;
      const targetY = sectionId === 'hero' ? 0 : offsetTop - 80; // 80px offset for other sections
      
      // Use GSAP for smoother scrolling animation
      gsap.to(window, {
        scrollTo: {
          y: targetY,
          autoKill: true
        },
        duration: 1.2,
        ease: "power2.inOut"
      });
    }
  };

  return (
    <header className="header" ref={headerRef}>
      <div className="header-container">
        {/* Logo Section */}
        <div className="header-logo" ref={logoRef}>
          <img src={LogoMarca} alt="ZK Logo" className="logo-image" />
        </div>
        
        {/* Navigation Icons */}
        <nav className="header-nav">
          <button 
            className="nav-icon-btn" 
            onClick={(e) => handleNavClick('hero', e.currentTarget)}
            ref={(el) => addToRefs(el, 0)}
            title="Início"
          >
            <img src={HomeIcon} alt="Home" className="nav-icon" />
            <span className="nav-tooltip">Início</span>
          </button>

          <button 
            className="nav-icon-btn" 
            onClick={(e) => handleNavClick('about', e.currentTarget)}
            ref={(el) => addToRefs(el, 1)}
            title="Sobre"
          >
            <img src={AboutIcon} alt="About" className="nav-icon" />
            <span className="nav-tooltip">Sobre</span>
          </button>

          <button 
            className="nav-icon-btn" 
            onClick={(e) => handleNavClick('projects', e.currentTarget)}
            ref={(el) => addToRefs(el, 2)}
            title="Projetos"
          >
            <img src={ProjectsIcon} alt="Projects" className="nav-icon" />
            <span className="nav-tooltip">Projetos</span>
          </button>

          <button 
            className="nav-icon-btn" 
            onClick={(e) => handleNavClick('contact', e.currentTarget)}
            ref={(el) => addToRefs(el, 3)}
            title="Contato"
          >
            <img src={ContactIcon} alt="Contact" className="nav-icon" />
            <span className="nav-tooltip">Contato</span>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;