import 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home/Home.jsx';
import About from './pages/About/About.jsx';
import Logement from './pages/Logements/Logements.jsx';
import Error from './pages/Error/Error.jsx';
import './styles/main.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Header /> {/* Header présent sur toutes les pages */}
        <Routes>
          <Route path="/" element={<Home />} /> {/* Page d'accueil */}
          <Route path="/about" element={<About />} /> {/* Page À propos */}
          <Route path="/logements/:id" element={<Logement />} /> {/* Page Logement */}
          <Route path="*" element={<Error />} /> {/* Page d'erreur */}
        </Routes>
        <Footer /> {/* Footer présent sur toutes les pages */}
      </Router>
    </div>
  );
}

export default App;