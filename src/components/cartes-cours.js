import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CardComponent = () => {
  const [cours, setCours] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:1337/api/cours-collectifs')
      .then(response => {
        setCours(response.data.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      {cours.map(cour => (
        <div key={cour.id} className="card">
          <h2>{cour.attributes.Titre}</h2>
          <p>{cour.attributes.Description}</p>
          <p>{cour.attributes.Horaire}</p>
        </div>
      ))}
    </div>
  );
};

export default CardComponent;
