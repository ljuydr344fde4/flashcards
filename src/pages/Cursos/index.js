import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../../services/api";

import Flashcard from "../../components/Flashcard";

import "./index.css";

function Cursos() {
  const [cursos, setCursos] = useState([]);

  useEffect(function () {
    api.get("").then((response) => {
      setCursos(response.data);
    });
  }, []);

  return (
    <div className="cursosContainer">
      <h1 className="title">Cursos</h1>
      <Link className="cadastrar" to="/cadastrar">
        + Cadastrar
      </Link>
      <div className="cursos">
        {cursos.map(function (curso) {
          return (
            <Flashcard
              key={curso.colecaoId}
              id={curso.colecaoId}
              nome={curso.nome}
              descricao={curso.descricao}
              publico={curso.publico}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Cursos;
