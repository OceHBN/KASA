import { useState } from "react";
import PropTypes from "prop-types";
import "../styles/main.scss";

const Informations = ({ title, location, tags, host, rating, description, equipments }) => {
    // États pour gérer l'ouverture/fermeture des collapses
    const [descriptionOpen, setDescriptionOpen] = useState(false);
    const [equipmentsOpen, setEquipmentsOpen] = useState(false);

    return (
        <div className="logement-info">
            <div className="logement-header">
                <div className="logement-details">
                    <h1 className="logement-title">{title}</h1>
                    <p className="logement-location">{location}</p>
                    <div className="logement-tags">
                        {tags.map((tag, index) => (
                            <span key={index} className="tag">{tag}</span>
                        ))}
                    </div>
                </div>

                <div className="logement-host-rating">
                    <div className="logement-host">
                        <p className="host-name">{host.name}</p>
                        <img className="host-picture" src={host.picture} alt={host.name} />
                    </div>
                    <div className="logement-rating">
                        {[...Array(5)].map((_, index) => (
                            <i key={index} className={index < rating ? "fa-solid fa-star filled-star" : "fa-solid fa-star empty-star"}></i>
                        ))}
                    </div>
                </div>
            </div>

            <div className="logement-collapses">
                {/* Collapse Description */}
                <div className="collapse-description">
                    <div
                        className="collapse-header-description"
                        onClick={() => setDescriptionOpen(!descriptionOpen)}
                    >
                        <span>Description</span>
                        <i className={descriptionOpen ? "fa-solid fa-chevron-up" : "fa-solid fa-chevron-down"}></i>
                    </div>
                    {descriptionOpen && <p className="collapse-content-description">{description}</p>}
                </div>

                {/* Collapse Équipements */}
                <div className="collapse-equipments">
                    <div
                        className="collapse-header-equipments"
                        onClick={() => setEquipmentsOpen(!equipmentsOpen)}
                    >
                        <span>Équipements</span>
                        <i className={equipmentsOpen ? "fa-solid fa-chevron-up" : "fa-solid fa-chevron-down"}></i>
                    </div>
                    {equipmentsOpen && (
                        <ul className="collapse-content-equipments">
                            {equipments.map((equipment, index) => (
                                <li key={index}>{equipment}</li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
};

// Validation des props avec PropTypes
Informations.propTypes = {
    title: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    host: PropTypes.shape({
        name: PropTypes.string.isRequired,
        picture: PropTypes.string.isRequired,
    }).isRequired,
    rating: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    equipments: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Informations;