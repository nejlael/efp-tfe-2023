import React from 'react';
import { Link } from 'react-router-dom';

function CallToAction() {
  return (
    <div className="call-to-action">
      <Link to="/inscriptionForm">Devenir membre</Link>
    </div>
  );
}

export default CallToAction;
