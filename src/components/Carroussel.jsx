import React, { useState } from 'react';
import './main.scss';
import leftArrow from '../assets/arrow_back.png';
import rightArrow from '../assets/arrow_foward.png';

function Carroussel({ pictures }) {
    const [currentIndex, setCurrentIndex] = useState(0); //useState est un hook de React qui permet d'ajouter un état local à un composant fonctionnel
    // useState permet de stocker l'index de l'image actuellement affichée

    // Fleche de Gauche
    const goToPrevious = () => {
        setCurrentIndex(currentIndex === 0 ? pictures.length - 1 : currentIndex - 1);
    };

    // Fleche de Droite
    const goToNext = () => {
        setCurrentIndex(currentIndex === pictures.length - 1 ? 0 : currentIndex + 1);
    };

    return (
        <div className="carroussel">
            <div className="carroussel__container">
                <img
                    className="carroussel__image"
                    src={pictures[currentIndex]}
                    alt={`Image ${currentIndex + 1}`}
                />
            </div>

            <div className="carroussel__controls">
                <button className="carroussel__arrow carroussel__arrow--left" onClick={goToPrevious}>
                    <img src={leftArrow} alt="Previous" />
                </button>
                <button className="carroussel__arrow carroussel__arrow--right" onClick={goToNext}>
                    <img src={rightArrow} alt="Next" />
                </button>
            </div>

            <p className="carroussel__counter">
                {currentIndex + 1}/{pictures.length}
            </p>
        </div>
    );
}

export default Carroussel;
