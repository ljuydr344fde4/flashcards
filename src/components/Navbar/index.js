import { Link } from "react-router-dom";

import "./index.css";

function Navbar() {
  return (
    <div className="container">
      <Link to="/">Home</Link>
      <Link to="/cursos">Cursos</Link>
    </div>
  );
}

export default Navbar;
