import logo from "../assets/WhiteLOGO.png"; // Chemin correct pour le logo

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__logo">
                <img src={logo} alt="Logo Kasa" /> {/* Utilisation de l'import logo */}
            </div>
            <p className="footer__text">© 2020 Kasa. All rights reserved</p>
        </footer>
    );
}

export default Footer;