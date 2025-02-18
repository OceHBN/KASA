import Router from "./routes/Router.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import "./styles/main.scss";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
