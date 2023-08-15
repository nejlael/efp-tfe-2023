import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import imageProg from '../img/prog.png';
import imageCours from '../img/cours.png';
import imageMenu from '../img/menu.jpg';
import imageCoach from '../img/coach.png';

function Functionality() {

  return ( 
   
      <div className="card-container">
        <div className="card">
          <Link to="/cours-collectifs">
          <img src={imageCours} alt="cours"></img>
            <h3>Cours <span>Collectifs</span></h3>
          </Link>
        </div>
        
        <div className="card">
          <Link to="/programme-fitness">
          <img src={imageProg} alt="prog"></img>
            <h3>Programme <span>Fitness</span></h3>
          </Link>
        </div>


        <div className="card">
          <Link to="/coming-soon">
          <img src={imageMenu} alt="menu"></img>
            <h3>Menu <span>sur Mesure</span></h3>
          </Link>
        </div>

        <div className="card">
            <img src={imageCoach} alt="coachs"></img>
          <Link to="/coming-soon">
            <h3>Coachs <span>Personnels</span></h3>
          </Link>
        </div>

        <p className="description">
        <h4>Fitness Pack vous garantit une meilleure version de vous-même !</h4>
        Nous proposons une gamme complète de programmes de fitness adaptés à vos besoins individuels, ainsi que des services de coaching personnalisés pour vous aider à rester motivé(e) et à progresser.
      </p>

      </div>
    
  );
}

export default Functionality;
