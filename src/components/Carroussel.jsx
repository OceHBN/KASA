import { useState } from 'react';
import arrowBack from "../assets/arrow_back.png";
import arrowForward from "../assets/arrow_foward.png";

function Carroussel({ pictures }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        setCurrentIndex(currentIndex === 0 ? pictures.length - 1 : currentIndex - 1);
    };

    const goToNext = () => {
        setCurrentIndex(currentIndex === pictures.length - 1 ? 0 : currentIndex + 1);
    };

    // Vérifie si le carrousel contient une seule image
    const isSinglePicture = pictures.length === 1;

    return (
        <div className={`carroussel ${isSinglePicture ? "carroussel--single" : ""}`}>
            <div className="carroussel__container">
                <img
                    className="carroussel__image"
                    src={pictures[currentIndex]}
                    alt={`Image ${currentIndex + 1}`}
                />
            </div>

            {/* Contrôles (toujours présents dans le DOM) */}
            <div className="carroussel__controls">
                <button className="carroussel__arrow carroussel__arrow--left" onClick={goToPrevious}>
                    <img src={arrowBack} alt="Previous" />
                </button>
                <button className="carroussel__arrow carroussel__arrow--right" onClick={goToNext}>
                    <img src={arrowForward} alt="Next" />
                </button>
            </div>

            {/* Compteur (toujours présent dans le DOM) */}
            <p className="carroussel__counter">
                {currentIndex + 1}/{pictures.length}
            </p>
        </div>
    );
}

export default Carroussel;