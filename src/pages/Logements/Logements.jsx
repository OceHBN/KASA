import 'react'; // React pas utilisé explicitement ici, pas contraignant
import { useParams } from 'react-router-dom';
import Carroussel from '../components/Carroussel';
import Informations from '../components/Informations';
import Header from '../components/Header';
import Footer from '../components/Footer';
import logements from '../data/logements.json';

function Logement() {
    // Récupérer l'ID du logement depuis l'URL
    const { id } = useParams();

    // Trouver le logement correspondant dans le fichier JSON
    const logement = logements.find((item) => item.id === id);

    // Si le logement n'existe pas, afficher un message d'erreur
    if (!logement) {
        return (
            <div>
                <Header />
                <p>Logement non trouvé</p>
                <Footer />
            </div>
        );
    }

    return (
        <div>
            <Header /> {/* Header présent sur toutes les pages */}
            <Carroussel images={logement.pictures} /> {/* Carrousel avec les images du logement */}
            <Informations
                title={logement.title}
                location={logement.location}
                tags={logement.tags}
                host={logement.host}
                rating={logement.rating}
                description={logement.description}
                equipments={logement.equipments}
            /> {/* Informations détaillées sur le logement */}
            <Footer /> {/* Footer présent sur toutes les pages */}
        </div>
    );
}

export default Logement;