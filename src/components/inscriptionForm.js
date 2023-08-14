import React, { useState } from 'react';
import axios from 'axios';

const InscriptionForm = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);

  const questions = [
    'Quel est votre nom ?',
    'Quel est votre prénom ?',
    'Quelle est votre adresse email ?',
    'Quel est votre numéro de téléphone ?',
  ];

  const handleNext = () => {
    const nextQuestionIndex = questionIndex + 1;

    if (nextQuestionIndex < questions.length) {
      setQuestionIndex(nextQuestionIndex);
    }
  };

  const handlePrevious = () => {
    const previousQuestionIndex = questionIndex - 1;

    if (previousQuestionIndex >= 0) {
      setQuestionIndex(previousQuestionIndex);
    }
  };

  const handleSubmit = async () => {
    try {
      // Envoyer les réponses d'inscription à la base de données
      const response = await axios.post('http://localhost:1337/api/inscriptions', {
        nom: answers[0],
        prenom: answers[1],
        email: answers[2],
        telephone: answers[3],
        membre: false,
        numeroClient: null,
      });

      console.log(response.data); // Afficher la réponse de la base de données

      // Réinitialiser les réponses et l'index des questions
      setAnswers([]);
      setQuestionIndex(0);
    } catch (error) {
      console.error(error);
    }
  };

  const handleAnswerChange = (event) => {
    const { value } = event.target;
    const updatedAnswers = [...answers];
    updatedAnswers[questionIndex] = value;
    setAnswers(updatedAnswers);
  };

  return (
    <div>
      {questionIndex < questions.length ? (
        <div>
          <h2>Inscription</h2>
          <p>{`Question ${questionIndex + 1} sur ${questions.length}`}</p>
          <label htmlFor="answer">{questions[questionIndex]}</label>
          <input
            type="text"
            id="answer"
            value={answers[questionIndex] || ''}
            onChange={handleAnswerChange}
          />
          {questionIndex > 0 && (
            <button onClick={handlePrevious}>Précédent</button>
          )}
          {questionIndex === questions.length - 1 ? (
            <button onClick={handleSubmit}>Valider mon inscription</button>
          ) : (
            <button onClick={handleNext}>Suivant</button>
          )}
        </div>
      ) : (
        <div>
          <h2>Merci pour votre inscription !</h2>
          <p>Vous serez contacté pour finaliser votre inscription.</p>
        </div>
      )}
    </div>
  );
};

export default InscriptionForm;
