import Banniere from '../../components/Banniere.jsx';
import Header from '../../components/Header.jsx';
import Footer from '../../components/Footer.jsx';
import Collapse from '../../components/Collapse.jsx'; // Import du composant indépendant
import aboutImage from '../../assets/Ban2.png';
import proposData from '../../data/propos.json';

function About() {
    return (
        <>
            <div className="structure">
                <Header />
                <Banniere image={aboutImage} showTitle={false} />
                <div className="about-container">
                    {proposData.map((item, index) => (
                        <Collapse
                            key={index}
                            title={item.title}
                            content={item.content}
                        />
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default About;