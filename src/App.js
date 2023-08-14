import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import Header from './components/header';
import Functionality from './components/fonctionnalities';
import CardComponent from './components/cartes-cours';
import ProgramForm from './components/programForm';
import InscriptionForm from './components/inscriptionForm';
import CallToAction from './components/callToAction';
import CourseDetails from './components/courseDetails';

function App() {
  const [showForm, setShowForm] = useState(false);

  return (
    <Router>
      <div className="App">
        <Header />

        <div className="content-container">
          <Routes>
            <Route
              path="/"
              element={
                showForm ? (
                  <ProgramForm />
                ) : (
                  <>
                    <CallToAction />
                    <Functionality />
                  </>
                )
              }
            />
            <Route path="/cours-collectifs" element={<CardComponent />} />
            <Route path="/cours-collectifs/:id" element={<CourseDetails />} />
            <Route path="/inscriptionForm" element={<InscriptionForm />} />
            <Route
              path="/programme-fitness"
              element={
                <div>
                  <ProgramForm />
                </div>
              }
            />
            {/* Autres routes */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
