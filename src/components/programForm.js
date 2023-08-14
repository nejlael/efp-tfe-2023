import React, { useState } from 'react';
import { generateProgramText } from '../utils/programUtils';

function ProgramForm() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [goal, setGoal] = useState('');
  const [experience, setExperience] = useState('');

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
    <div>
      <h2>Formulaire de Programme sur Mesure</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nom:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Âge:
          <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
        </label>
        <label>
          Poids (en kg):
          <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
        </label>
        <label>
          Taille (en cm):
          <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
        </label>
        <label>
          Objectif:
          <select value={goal} onChange={(e) => setGoal(e.target.value)}>
            <option value="">Sélectionnez votre objectif</option>
            <option value="perte-poids">Perte de poids</option>
            <option value="prise-masse">Prise de masse musculaire</option>
            <option value="tonification">Tonification musculaire</option>
            <option value="amélioration-performance">Amélioration des performances</option>
          </select>
        </label>
        <label>
          Expérience en entraînement:
          <textarea value={experience} onChange={(e) => setExperience(e.target.value)} />
        </label>
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
}

export default ProgramForm;
