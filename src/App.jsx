import Navbar from "./assets/components1/Navbar";
import Footer from "./assets/components1/Footer";
import { Route, Routes } from "react-router-dom";

import Inicio from "./pages/Inicio";
import Testimonios from "./pages/Testimonios";
import Servicios from "./pages/Servicios";
import Contacto from "./pages/Contacto";
import Login from "./pages/Login";

const App = () => {

  return (
    <>
      <Navbar />

      <h1 className="container">BIENVENIDOS AL CENTRO DE AYUDA MENTAL "AYUDA-HOY"</h1>

      <br />

      <Routes>
        <Route element={<Inicio />} path="/"></Route>
        <Route element={<Testimonios />} path="/Testimonios"></Route>
        <Route element={<Servicios />} path="/Servicios"></Route>
        <Route element={<Contacto />} path="/Contacto"></Route>
        <Route element={<Login />} path="/Login"></Route>
      </Routes>

      <Footer />

    </>
  )

}
export default App;