import { useParams } from "react-router-dom";
import logements from "../data/logements.json";

function Logement() {
    // Récupérer l'ID du logement depuis l'URL
    const { id } = useParams();

    // Trouver le logement correspondant dans le fichier JSON
    const logement = logements.find((item) => item.id === id);

    return (
        <div>
            {logement ? (
                <>
                    <h1>{logement.title}</h1>
                    <img src={logement.cover} alt={logement.title} />
                    <p>{logement.description}</p>
                </>
            ) : (
                <p>Logement non trouvé</p>
            )}
        </div>
    );
}

export default Logement;

