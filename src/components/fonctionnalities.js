import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Functionality() {

  return ( 
   
      <div className="card-container">
        <div className="card">
          <Link to="/cours-collectifs">
          <img src="../../public/img/cours.png" alt="coachs"></img>
            <h3>Cours Collectifs</h3>
          </Link>
        </div>
        
        <div className="card">
          <Link to="/programme-fitness">
          <img src="" alt="coachs"></img>
            <h3>Programme Fitness</h3>
          </Link>
        </div>


        <div className="card">
          <Link to="/coming-soon">
          <img src="" alt="coachs"></img>
            <h3>Menu sur Mesure</h3>
          </Link>
        </div>

        <div className="card">
            <img src="" alt="coachs"></img>
          <Link to="/comming-soon">
            <h3>Coachs Personnels</h3>
          </Link>
        </div>

      </div>
    
  );
}

export default Functionality;
