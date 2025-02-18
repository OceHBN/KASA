import React from 'react';
import Banniere from './components/Banniere'; // Assure-toi du bon chemin
import aboutImage from './assets/Ban2.png';

function About() {
    return (
        <div>
            <Banniere image={aboutImage} />
            {/* Autres contenus de la page About */}
        </div>
    );
}

export default About;
