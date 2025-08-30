import React, { useEffect, useState } from 'react';
import './LightningBackground.css';

const LightningBackground = () => {
  const [lightnings, setLightnings] = useState([]);

  useEffect(() => {
    const createLightning = () => {
      const id = Date.now() + Math.random();
      const newLightning = {
        id,
        left: Math.random() * 100,
        animationDuration: Math.random() * 2 + 1,
        delay: Math.random() * 5
      };

      setLightnings(prev => [...prev, newLightning]);

      setTimeout(() => {
        setLightnings(prev => prev.filter(lightning => lightning.id !== id));
      }, 3000);
    };

    const interval = setInterval(createLightning, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="lightning-background">
      {lightnings.map(lightning => (
        <div
          key={lightning.id}
          className="background-lightning"
          style={{
            left: `${lightning.left}%`,
            animationDuration: `${lightning.animationDuration}s`,
            animationDelay: `${lightning.delay}s`
          }}
        />
      ))}
    </div>
  );
};

export default LightningBackground;
