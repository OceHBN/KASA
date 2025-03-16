import Header from "../../components/Header";
import Banniere from "../../components/Banniere"; // Chemin corrigé
import Cards from "../../components/Cards"; // Assurez-vous que ce fichier existe
import Footer from "../../components/Footer";
import Ban1 from "../../assets/Ban1.png";

function Home() {
    return (
        <>
            <div className="structure">
                <Header />
                <Banniere image={Ban1} />
                <Cards />
            </div>
            <Footer /> {/* Placé en dehors du div mais toujours dans le return */}
        </>
    );
}

export default Home;