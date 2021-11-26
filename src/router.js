import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Cursos from "./pages/Cursos";
import Cadastrar from "./pages/Cadastrar";

import Navbar from "./components/Navbar";

function Router() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route name="Home" path="/" element={<Home />} />
        <Route name="Cursos" path="/cursos" element={<Cursos />} />
        <Route name="Cadastrar" path="/cadastrar" element={<Cadastrar />} />
        <Route
          name="Editar"
          path="/editar/:id"
          element={<Cadastrar editar />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
