import React from 'react';
import logements from './data/logements.json';
import './main.scss';

function Cards() {
    return (
        <div className="cards">
            {logements.map((logement) => (
                <div key={logement.id} className="card">
                    <div className="card__image" style={{ backgroundImage: `url(${logement.cover})` }} />
                    <h3 className="card__title">{logement.title}</h3>
                </div>
            ))}
        </div>
    );
}

export default Cards;