import { useState } from "react";
import PropTypes from "prop-types";
import Collapse from "./Collapse"; // Import du composant Collapse
import "../styles/main.scss";

const Informations = ({ title, location, tags, host, rating, description, equipments }) => {
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

            <div className="collapse-logement"> {/* Nouvelle div wrapper */}
                <Collapse
                    key="description"
                    title="Description"
                    content={<p>{description}</p>}
                />
                <Collapse
                    key="equipments"
                    title="Équipements"
                    content={
                        <ul>
                            {equipments.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    }
                />
            </div>
        </div>
    );
};

// Validation des props avec PropTypes (inchangé)
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