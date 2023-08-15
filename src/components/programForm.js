import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight, FaCheck } from 'react-icons/fa';
import { generateProgramText } from '../utils/programUtils';
import '../App.css';

function ProgramForm() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [goal, setGoal] = useState('');
  const [experience, setExperience] = useState('');

  const questions = [
    'Quel est votre nom ?',
    'Quel est votre âge ?',
    'Quel est votre poids en kg ?',
    'Quelle est votre taille en cm ?',
    'Quel est votre objectif ?',
    'Parlez-nous de votre expérience en entraînement :',
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

  const handleSubmit = (e) => {
    e.preventDefault();

    const programText = generateProgramText(name, age, weight, height, goal, experience);
    console.log(programText);

    // Effectuer des opérations supplémentaires, comme l'envoi des données à un serveur, la validation, etc.

    // Réinitialiser les valeurs du formulaire
    setName('');
    setAge('');
    setWeight('');
    setHeight('');
    setGoal('');
    setExperience('');
  };

  return (
    <div className="program-form">
      {questionIndex < questions.length ? (
        <div>
          <h2>Formulaire de Programme sur Mesure</h2>
          <label htmlFor="answer">{questions[questionIndex]}</label>
          <input
            type="text"
            id="answer"
            value={
              questionIndex === 0
                ? name
                : questionIndex === 1
                ? age
                : questionIndex === 2
                ? weight
                : questionIndex === 3
                ? height
                : questionIndex === 4
                ? goal
                : experience
            }
            onChange={(e) => {
              if (questionIndex === 0) setName(e.target.value);
              else if (questionIndex === 1) setAge(e.target.value);
              else if (questionIndex === 2) setWeight(e.target.value);
              else if (questionIndex === 3) setHeight(e.target.value);
              else if (questionIndex === 4) setGoal(e.target.value);
              else if (questionIndex === 5) setExperience(e.target.value);
            }}
          />
          <div className="button-container">
            {questionIndex > 0 && (
              <button className="prev-button" onClick={handlePrevious}>
                <FaArrowLeft />
              </button>
            )}
            {questionIndex === questions.length - 1 ? (
              <button className="submit-button" onClick={handleSubmit}>
                Envoyer <FaCheck />
              </button>
            ) : (
              <button className="next-button" onClick={handleNext}>
                Suivant <FaArrowRight />
              </button>
            )}
          </div>
          <div className="progress-bar">
            {questions.map((_, index) => (
              <div
                key={index}
                className={`progress-dot ${index <= questionIndex ? 'filled' : ''}`}
              ></div>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <h2>Votre Programme sur Mesure</h2>
          <p>Merci pour votre participation !</p>
        </div>
      )}
    </div>
  );
}

export default ProgramForm;
