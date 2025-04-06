import React, { useState, useEffect } from 'react';

export const Preloader = () => {
  const logoText = "Travelsy";
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < logoText.length) {
        setDisplayedText((prevText) => prevText + logoText[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(interval);
      }
    }, 2000 / logoText.length);

    return () => clearInterval(interval);
  }, [logoText, currentIndex]);

  return (
    <div className="preloader">
      <h1 className="logo-text">{displayedText}</h1>
    </div>
  );
};

