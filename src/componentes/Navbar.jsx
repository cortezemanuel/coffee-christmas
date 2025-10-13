import "../css/Navbar.css";
import CartWidget from "./CartWidget";

const Navbar = () => {
  return (
    <nav className="nav-container">
      <a className="a-nav" href="/">
        <img src="/logo.png" alt="Coffee Christmas Logo" className="logo" />
      </a>
      <div className="nav-links">
        <a className="a-nav" href="#">
          Bebidas
        </a>
        <a className="a-nav" href="#">
          Alimentos
        </a>
        <a className="a-nav" href="#">
          Regalos
        </a>
        <CartWidget />
      </div>
    </nav>
  );
};

export default Navbar;
