import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./component/home/Home";
import Header from "./component/header/Header";
import Footer from "./component/footer/Footer";
import Contactanos from "./component/contactanos/Contactanos";
import Agendar from "./component/agendar/Agendar";
import Mision from "./component/mision/Mision";
import Ubicacion from "./component/ubicacion/Ubicacion";
import Aserca from "./component/aserca/Aserca";

function App() {
  return (
    <div className="app_contenedor">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cita" element={<Agendar />} />
          <Route path="/mision" element={<Mision />} />
          <Route path="/ubicacion" element={<Ubicacion />} />
          <Route path="/aserca" element={<Aserca />} />
        </Routes>
        <Contactanos />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
