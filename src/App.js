import React, { useState, useEffect } from 'react';
import './App.css';
import LoadingScreen from './components/LoadingScreen';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Footer from './components/Footer';
import LightningBackground from './components/LightningBackground';

function App() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        setLoading(false);
      }, 800);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen fadeOut={fadeOut} />;
  }

  return (
    <div className="App">
      <LightningBackground />
      <Header />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Footer />
    </div>
  );
}

export default App;
