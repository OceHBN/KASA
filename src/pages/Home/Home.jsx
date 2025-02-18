export default Home;

import React from 'react';
import Cards from './components/Cards.jsx';

function App() {
    return (
        <div>
            <h1>Nos Logements</h1>
            <Cards />
        </div>
    );
}

export default App;

import React from 'react';
import Banniere from './components/Banniere'; // Assure-toi du bon chemin
import homeImage from './assets/Ban.png';

function Home() {
    return (
        <div>
            <Banniere image={homeImage} />
            {/* Autres contenus de la page Home */}
        </div>
    );
}

export default Home;
