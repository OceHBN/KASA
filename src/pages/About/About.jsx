import Banniere from '../../components/Banniere.jsx';
import Header from '../../components/Header.jsx';
import Footer from '../../components/Footer.jsx';
import aboutImage from '../../assets/Ban2.png';
import proposData from '../../data/propos.json';
import { useState } from 'react';

function About() {
    return (
        <>
            <div className="structure">
                <Header /> {/* Header présent sur toutes les pages */}
                <Banniere image={aboutImage} /> {/* Bannière avec l'image importée */}
                <div className="about-container">
                    {proposData.map((item, index) => (
                        <Collapse key={index} title={item.title} content={item.content} />
                    ))}
                </div>
            </div>
            <Footer /> {/* Footer présent sur toutes les pages */}
        </>
    );
}

function Collapse({ title, content }) {
    const [isOpen, setIsOpen] = useState(false); // Collapse fermé par défaut

    return (
        <div className="collapse">
            <div className="collapse-header" onClick={() => setIsOpen(!isOpen)}>
                <span className="collapse-title">{title}</span>
                <i className={`fa-solid ${isOpen ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
            </div>
            {isOpen && <div className="collapse-content">{content}</div>}
        </div>
    );
}

export default About;