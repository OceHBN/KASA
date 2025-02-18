import React, { useState } from "react";
import "../styles/main.scss";
import { useParams } from "react-router-dom";
import logements from "../data/logements.json";

const Informations = () => {
    const { id } = useParams();
    const logement = logements.find(item => item.id === id);

    if (!logement) {
        return <p>Logement non trouvé</p>;
    }

    const [descriptionOpen, setDescriptionOpen] = useState(false);
    const [equipmentsOpen, setEquipmentsOpen] = useState(false);

    return (
        <div className="logement-info">
            <div className="logement-header">
                <div className="logement-details">
                    <h1 className="logement-title">{logement.title}</h1>
                    <p className="logement-location">{logement.location}</p>
                    <div className="logement-tags">
                        {logement.tags.map((tag, index) => (
                            <span key={index} className="tag">{tag}</span>
                        ))}
                    </div>
                </div>

                <div className="logement-host">
                    <p className="host-name">{logement.host.name}</p>
                    <img className="host-picture" src={logement.host.picture} alt={logement.host.name} />
                </div>
            </div>

            <div className="logement-rating">
                {[...Array(5)].map((_, index) => (
                    <i key={index} className={index < logement.rating ? "fa-solid fa-star filled-star" : "fa-solid fa-star empty-star"}></i>
                ))}
            </div>

            <div className="logement-collapses">
                {/* Description */}
                <div className="collapse">
                    <div className="collapse-header" onClick={() => setDescriptionOpen(!descriptionOpen)}>
                        <span>Description</span>
                        <i className={descriptionOpen ? "fa-solid fa-chevron-up" : "fa-solid fa-chevron-down"}></i>
                    </div>
                    {descriptionOpen && <p className="collapse-content">{logement.description}</p>}
                </div>

                {/* Equipements */}
                <div className="collapse">
                    <div className="collapse-header" onClick={() => setEquipmentsOpen(!equipmentsOpen)}>
                        <span>Équipements</span>
                        <i className={equipmentsOpen ? "fa-solid fa-chevron-up" : "fa-solid fa-chevron-down"}></i>
                    </div>
                    {equipmentsOpen && (
                        <ul className="collapse-content">
                            {logement.equipments.map((equipment, index) => (
                                <li key={index}>{equipment}</li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Informations;
