import '../styles/main.scss';
import banImage from '../assets/Ban1.png';

function Banniere({ image = banImage, showTitle = true }) {
    return (
        <div className="banniere" style={{ backgroundImage: `url(${image})` }}>
            <div className="banniere__overlay"></div>
            {showTitle && <h1 className="banniere__title">Chez vous, partout et ailleurs</h1>}
        </div>
    );
}

export default Banniere;