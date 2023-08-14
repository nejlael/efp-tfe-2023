import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Remplacez "Switch" par "Routes"

function Header() {
  return (
    // <header>
    //   <nav>
    //       <ul>
    //         <li>
    //           <Link to="/Header"> <img src="logooo" alt="logo_fitnessPack"></img> </Link>
    //         </li>
    //         <li>
    //           <Link to="/menu">menu</Link>
    //         </li>
    //         {/* Ajoutez d'autres liens ici */}
    //       </ul>

    //       <h1>boost your <div className='changingTitle'>mindset</div></h1>
    //     </nav>
    // </header>
    <header className="header">
    <div className="nav-bar">
      <a href="index.html"><div className="groupe-18"></div></a>
      <div className="icon-feather-menu">
        
      </div>
    </div>
  </header>
  );
}

export default Header;
