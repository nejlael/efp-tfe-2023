import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

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
    <div className="card-container">
      {cours.map(cour => (
        <div key={cour.id} className="card">
          <Link to={`/cours-collectifs/${cour.id}`}>
            
            <div className="card-image">
              <h2 className='intituleCours'>{cour.attributes.Titre}</h2>
              <img src={`http://localhost:1337/uploads/crossfit_2f76774745.avif`} alt={cour.attributes.Titre} />
            </div>
            
          </Link>
        </div>
      ))}
    </div>
  );
};

export default CardComponent;
