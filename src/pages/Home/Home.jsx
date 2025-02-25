import 'react'; // React pas utilisé explicitement ici, pas contraignant
import Header from '../components/Header';
import Footer from '../components/Footer';
import Banniere from '../components/Banniere';
import Cards from '../components/Cards';
import homeImage from '../assets/Ban1.png'; // le chemin est correct

function Home() {
    return (
        <div>
            <Header /> {/* Header présent sur toutes les pages */}
            <Banniere image={homeImage} /> {/* Bannière avec l'image importée */}
            <Cards /> {/* Composant Cards pour afficher les logements */}
            <Footer /> {/* Footer présent sur toutes les pages */}
        </div>
    );
}

export default Home;