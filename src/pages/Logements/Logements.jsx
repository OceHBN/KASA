import { useParams, Navigate } from 'react-router-dom';
import Carroussel from "../../components/Carroussel";
import Informations from "../../components/Informations"; // Import du composant Informations
import Header from "../../components/Header";
import Footer from '../../components/Footer.jsx';
import logements from "../../data/logements.json";

function Logement() {
    const { id } = useParams();

    const logement = logements.find((item) => String(item.id) === String(id));

    if (!logement) {
        console.log("⚠️ Aucun logement trouvé, redirection vers /error");
        return <Navigate to="/error" replace />;
    }

    return (
        <>
            <div className="structure">
                <Header />
                <Carroussel pictures={logement.pictures} />
                <Informations
                    title={logement.title}
                    location={logement.location}
                    tags={logement.tags}
                    host={logement.host}
                    rating={logement.rating}
                    description={logement.description}
                    equipments={logement.equipments}
                />
            </div>
            <Footer /> {/* Placé en dehors du div mais toujours dans le return */}
        </>
    );
}

export default Logement;