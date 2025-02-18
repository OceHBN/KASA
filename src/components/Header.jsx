import { Link } from "react-router-dom"; // Router React evite le rechargement de la page
import logo from "../assets/Logo.png";

function Header() {
    return (
        <header className="header">
            <div className="header__logo">
                <img src={logo} alt="Logo Kasa" />
            </div>
            <nav className="header__nav">
                <ul>
                    <li>
                        <Link to="/">Accueil</Link>
                    </li>
                    <li>
                        <Link to="/about">À Propos</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
