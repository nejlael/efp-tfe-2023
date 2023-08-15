import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Functionality() {

  return ( 
   
      <div className="card-container">
        <div className="card">
          <Link to="/cours-collectifs">
          <img src="../../public/img/cours.png" alt="cours"></img>
            <h3>Cours <span>Collectifs</span></h3>
          </Link>
        </div>
        
        <div className="card">
          <Link to="/programme-fitness">
          <img src="../../public/img/prog.png" alt="prog"></img>
            <h3>Programme <span>Fitness</span></h3>
          </Link>
        </div>


        <div className="card">
          <Link to="/coming-soon">
          <img src="" alt="menu"></img>
            <h3>Menu <span>sur Mesure</span></h3>
          </Link>
        </div>

        <div className="card">
            <img src="" alt="coachs"></img>
          <Link to="/coming-soon">
            <h3>Coachs <span>Personnels</span></h3>
          </Link>
        </div>

      </div>
    
  );
}

export default Functionality;
