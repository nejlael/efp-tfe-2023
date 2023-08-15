import React, { useState, useEffect } from 'react';

const Header = () => {
  const [title, setTitle] = useState('Mindset');
  const keywords = ['Mindset', 'Meal', 'Muscles'];
  const intervalDuration = 2000; // 1 seconde

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentIndex = keywords.indexOf(title);
      const nextIndex = (currentIndex + 1) % keywords.length;
      setTitle(keywords[nextIndex]);
    }, intervalDuration);

    return () => {
      clearInterval(intervalId);
    };
  }, [title]);

  return (
    <header className="header">
      <div className="header-logo">
        <img src="" alt="Logo" />
      </div>
      <h1 className="header-title">
        Boost Your{' '}
        <span className="colored-text">{title}</span>
      </h1>
    </header>
  );
};

export default Header;
