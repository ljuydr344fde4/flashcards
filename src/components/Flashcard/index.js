import { useNavigate } from "react-router-dom";

import { api } from "../../services/api";

import "./index.css";

function Flashcard(props) {
  const navigate = useNavigate();

  function editar() {
    navigate("/editar/" + props.id);
  }

  function remover() {
    api.delete("/" + props.id).then(() => {
      window.location.reload();
    });
  }

  return (
    <div className="flashcardContainer">
      <h1>{props.nome}</h1>
      <p>{props.descricao}</p>
      <bold>{props.publico ? "Publico" : "Privado"}</bold>
      <div className="buttons">
        <button onClick={editar}>Editar</button>
        <button onClick={remover}>Remover</button>
      </div>
    </div>
  );
}

export default Flashcard;
