import React from 'react';
import logoCouleur from '../img/logo_text.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src={logoCouleur} alt="Logo" />
      </div>
      <div className="footer-address">
        <p>123 Rue Fictive, Ville Imaginaire</p>
        <p>Téléphone : +123 456 789</p>
      </div>
      <div className="footer-developed-by">
        <p>Développé par Nejla</p>
      </div>
    </footer>
  );
};

export default Footer;
