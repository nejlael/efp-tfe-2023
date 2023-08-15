import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';

const ComingSoon = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      // Envoyer l'adresse e-mail à une base de données ou à un service de mailing
      await axios.post('http://localhost:1337/api/coming-soon-emails', {
        email: email,
      });

      // Réinitialiser l'adresse e-mail
      setEmail('');
      alert("Vous serez informé lorsque la fonctionnalité sera disponible !");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="coming-soon-container">
      <h2>Coming Soon</h2>
      <p>Cette fonctionnalité sera bientôt disponible !</p>
      <p>Laissez-nous votre adresse e-mail pour être informé dès que c'est prêt :</p>
      <input
        type="email"
        placeholder="Votre adresse e-mail"
        value={email}
        onChange={handleEmailChange}
      />
      <button className="submit-button" onClick={handleSubmit}>M'avertir</button>
    </div>
  );
};

export default ComingSoon;
