import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CardComponent from './components/cartes-cours';
import Header from './components/header';
import Functionality from './components/fonctionnalities';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <div className="content-container">
          <Routes>
          <Route path="/cours-collectifs" element={<CardComponent />} />
            {/* Ajoutez vos autres routes ici */}
          </Routes>

          <Functionality/>
        </div>

      
      </div>
    </Router>
  );
}

export default App;
