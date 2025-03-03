import datalogements from "../data/logements.json";
import '../styles/main.scss';
import { Link } from "react-router-dom";

function Cards() {
    return (
        <div className="cards">
            {datalogements.map((logement) => (
                <Link key={logement.id} to={`/logements/${logement.id}`} className="card">
                    <div className="card__image" style={{ backgroundImage: `url(${logement.cover})` }} />
                    <h3 className="card__title">{logement.title}</h3>
                </Link>
            ))}
        </div>
    );
}

export default Cards;
