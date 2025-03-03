import 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import About from './pages/About/About.jsx';
import Logement from './pages/Logements/Logements.jsx';
import Error from './pages/Error/Error.jsx';
import './styles/main.scss';

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} /> {/* Page d'accueil */}
          <Route path="/about" element={<About />} /> {/* Page À propos */}
          <Route path="/logements/:id" element={<Logement />} /> {/* Page Logement */}
          <Route path="*" element={<Error />} /> {/* Page d'erreur */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;