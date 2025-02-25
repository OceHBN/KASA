import 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Error() {
    return (
        <>
            <Header /> {/* Header présent sur toutes les pages */}
            <div className="error-container">
                <p className="error-404">404</p>
                <p className="error-message">
                    Oups! La page que vous demandez n&apos;existe pas.
                </p>
                <Link to="/" className="error-link">
                    Retourner sur la page d’accueil
                </Link>
            </div>
            <Footer /> {/* Footer présent sur toutes les pages */}
        </>
    );
}

export default Error;