import 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Logement from './pages/Logements/Logement';
import Error from './pages/Error/Error';
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