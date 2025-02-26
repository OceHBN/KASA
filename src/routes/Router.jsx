import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home.jsx';
import About from '../pages/About/About.jsx';
import Logements from '../pages/Logements/Logements.jsx';
import Error from '../pages/Error/Error.jsx';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

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