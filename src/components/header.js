import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import de Link


const Header = () => {
  const [title, setTitle] = useState('Mindset');
  const keywords = ['Mindset', 'Meal', 'Muscles'];
  const intervalDuration = 2000; // 2 secondes

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
      {/* Utilisation de Link pour le logo */}
      <Link to="/">
        <div className="header-logo">
          <img src="../../public/img/headerimg.jpg'" alt="Logo" />
        </div>
      </Link>
      <h1 className="header-title">
        Boost Your<br>
        </br>{' '}
        <span className="colored-text">{title}</span>
      </h1>
    </header>
  );
};

export default Header;
