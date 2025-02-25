import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Logements from '../pages/Logements/Logements';
import Error from '../pages/Error/Error';
import Header from '../components/Header';
import Footer from '../components/Footer';

function AppRouter() {
    return (
        <Router>
            <Header /> {/* Header présent sur toutes les pages */}
            <Routes>
                <Route path="/" element={<Home />} /> {/* Page d'accueil */}
                <Route path="/about" element={<About />} /> {/* Page À propos */}
                <Route path="/logements/:id" element={<Logements />} /> {/* Page Logement */}
                <Route path="*" element={<Error />} /> {/* Page d'erreur */}
            </Routes>
            <Footer /> {/* Footer présent sur toutes les pages */}
        </Router>
    );
}

export default AppRouter;