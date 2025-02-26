import '../styles/main.scss';
import banImage from '../assets/Ban1.png';

function Banniere({ image = banImage }) {
    return (
        <div className="banniere" style={{ backgroundImage: `url(${image})` }}>
            <div className="banniere__overlay"></div>
            <h1 className="banniere__title">Titre de la page</h1>
        </div>
    );
}

export default Banniere;
