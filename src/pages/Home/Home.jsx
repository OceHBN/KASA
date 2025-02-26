import Header from "../../components/Header";
import Banniere from "../../components/Banniere"; // Chemin corrigé
import Cards from "../../components/Cards"; // Assurez-vous que ce fichier existe
import Footer from "../../components/Footer";
import Ban1 from "../../assets/Ban1.png";

function Home() {
    return (
        <div>
            <Header />
            <Banniere image={Ban1} />
            <Cards />
            <Footer />
        </div>
    );
}

export default Home;