import { Route, Routes, BrowserRouter } from "react-router-dom";
import Nav from "./Components/Nav";
import { Hero } from "./Components/Hero";
import Footer from "./Components/Footer";
import ContactForm from "./Components/Contacto";
import { About } from "./Components/Aboutme";
import { Materias } from "./Components/Materias";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/contacto" element={<ContactForm />} />
          <Route path="/quiensoy" element={<About />} />
          <Route path="/materias" element={<Materias />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
