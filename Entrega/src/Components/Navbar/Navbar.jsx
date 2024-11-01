import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.JS";
import { Link } from "react-router-dom";

function Navbar() {
  return(
    <nav className="quadro navbar navbar-expand-lg bg-body-tertiary background-">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">ChicoTec</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active" href="/Clientes">Clientes</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Produtos</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Loja</a>
          </li>
          
        </ul>
      </div>
    </div>
  </nav>
    );
}

export default Navbar;
