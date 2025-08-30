import React from 'react';
import './ChibiDecorations.css';

// Import chibi images
import chibi1 from '../chibis/Chibi 1.png';
import chibi2 from '../chibis/Chibi 2.png';
import chibi3 from '../chibis/Chibi 3.png';
import chibi4 from '../chibis/Chibi 4.png';
import chibi5 from '../chibis/Chibi 5.png';
import chibi6 from '../chibis/Chibi 6.png';

const ChibiDecorations = () => {
  return (
    <div className="chibi-decorations">
      {/* Hero Section Chibis */}
      <img src={chibi1} alt="Zenitsu Chibi" className="chibi chibi-hero-1" />
      <img src={chibi2} alt="Zenitsu Chibi" className="chibi chibi-hero-2" />
      
      {/* About Section Chibis */}
      <img src={chibi3} alt="Zenitsu Chibi" className="chibi chibi-about-1" />
      <img src={chibi4} alt="Zenitsu Chibi" className="chibi chibi-about-2" />
      
      {/* Projects Section Chibis */}
      <img src={chibi5} alt="Zenitsu Chibi" className="chibi chibi-projects-1" />
      
      {/* Contact Section Chibi */}
      <img src={chibi6} alt="Zenitsu Chibi" className="chibi chibi-contact-1" />
    </div>
  );
};

export default ChibiDecorations;
