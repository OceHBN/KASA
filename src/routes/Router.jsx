// a redefinir en fonction de la structure de mon projet + verifier les ID logement
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home.jsx";
import About from "../pages/About/About.jsx";
import Error from "../pages/Error/Error.jsx";
import Logements from "../pages/Logements/Logements.jsx";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/logements/:id" element={<Logements />} />
            <Route path="*" element={<Error />} />
        </Routes>
    );
};

export default Router;

