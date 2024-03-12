import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav>
        <h1>Facturación</h1>
        <div>
          <Link to="/">Inicio</Link> |<Link to="/clients">Clientes</Link> |
          <Link to="/products">Products</Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
