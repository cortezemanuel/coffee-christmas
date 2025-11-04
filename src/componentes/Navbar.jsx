import { Link } from "react-router-dom";
import "../css/Navbar.css";
import CartWidget from "./CartWidget";

const Navbar = () => {
  return (
    <nav className="navbar bg-body-tertiary fixed-top shadow-sm">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src="/logo.png"
            alt="Coffee Christmas Logo"
            className="logo me-2"
          />
          <span className="fw-bold text-danger">Coffee Christmas</span>
        </Link>

        <div className="d-none d-md-flex align-items-center gap-4">
          <div className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Bebidas
            </a>
            <ul className="dropdown-menu">
              <li>
                <Link
                  className="dropdown-item"
                  to="/categoria/bebidas-calientes"
                >
                  Calientes
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/categoria/bebidas-frias">
                  Frías
                </Link>
              </li>
            </ul>
          </div>

          <div className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Comidas
            </a>
            <ul className="dropdown-menu">
              <li>
                <Link
                  className="dropdown-item"
                  to="/categoria/comidas-calientes"
                >
                  Calientes
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/categoria/comidas-frias">
                  Frías
                </Link>
              </li>
            </ul>
          </div>

          <Link className="nav-link" to="/categoria/regalos">
            Regalos
          </Link>
        </div>

        <div className="d-flex align-items-center gap-3">
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Buscar"
              aria-label="Buscar"
            />
            <button className="btn btn-danger text-white" type="submit">
              Buscar
            </button>
          </form>
          <CartWidget />
        </div>

        <button
          className="navbar-toggler d-md-none"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>

      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
            Coffee Christmas
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/categoria/bebidas-calientes">
                Bebidas Calientes
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/categoria/bebidas-frias">
                Bebidas Frías
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/categoria/comidas-calientes">
                Comidas Calientes
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/categoria/comidas-frias">
                Comidas Frías
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/categoria/regalos">
                Regalos
              </Link>
            </li>
          </ul>

          <div className="mt-3">
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Buscar"
                aria-label="Buscar"
              />
              <button className="btn btn-danger text-white" type="submit">
                Buscar
              </button>
            </form>
            <div className="mt-3">
              <CartWidget />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
