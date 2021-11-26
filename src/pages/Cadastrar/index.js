import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { api } from "../../services/api";

import "./index.css";

function Cadastrar(props) {
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [privacidade, setPrivacidade] = useState(false);

  const parametros = useParams();

  const navigate = useNavigate();

  function enviar(e) {
    e.preventDefault();
    if (props.editar) {
      api
        .put("/" + parametros.id, {
          nome,
          descricao,
          publico: privacidade,
        })
        .then(() => {
          navigate("/cursos");
        });
      return;
    }

    api
      .post("", {
        nome,
        descricao,
        publico: privacidade,
      })
      .then(() => {
        navigate("/cursos");
      });
  }

  function cancelar() {
    navigate("/cursos");
  }

  useEffect(() => {
    api.get("/" + parametros.id).then((response) => {
      setNome(response.data.nome);
      setDescricao(response.data.descricao);
      setPrivacidade(response.data.publico);
    });
  }, []);

  return (
    <div className="cadastrarContainer">
      <h1>{props.editar ? "Editar curso" : "Cadastrar curso"}</h1>
      <form id="content" onSubmit={enviar}>
        <label>Nome:</label>
        <input
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className="text"
          type="text"
        />
        <label>Descricao:</label>
        <textarea
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          className="text"
          style={{ resize: "none" }}
        />
        <label>Privacidade</label>
        <div style={{ margin: "1rem 0 1rem 0", padding: "1rem" }}>
          <label style={{ fontWeight: "normal" }} htmlFor="publico">
            Público
          </label>
          <input
            onChange={() => setPrivacidade(true)}
            id="publico"
            checked={privacidade}
            className="radioButton"
            type="radio"
          />
          <label style={{ fontWeight: "normal" }} htmlFor="privado">
            Privado
          </label>
          <input
            onChange={() => setPrivacidade(false)}
            id="privado"
            checked={!privacidade}
            className="radioButton"
            type="radio"
          />
        </div>
        <button type="button" className="cancelarButton" onClick={cancelar}>
          Cancelar
        </button>
        <input
          className="sendButton"
          type="submit"
          value={props.editar ? "Salvar" : "Cadastrar"}
        />
      </form>
    </div>
  );
}

export default Cadastrar;
