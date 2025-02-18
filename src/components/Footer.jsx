import { Link } from "react-router-dom"; // Router React evite le rechargement de la page
import logo from "../assets/WhiteLOGO.png";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__logo">
                <img src="path_to_logo.png" alt="Logo Kasa" />
            </div>
            <p className="footer__text">© 2020 Kasa. All rights reserved</p>
        </footer>
    );
}

export default Footer;
