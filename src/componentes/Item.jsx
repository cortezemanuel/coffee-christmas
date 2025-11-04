import { Link } from "react-router-dom";

function Item({ producto }) {
  return (
    <div className="card text-center h-100 shadow-sm border-0">
      <img
        src={producto.imagen}
        className="card-img-top"
        alt={producto.nombre}
        style={{ height: "200px", objectFit: "cover" }}
      />
      <div className="card-body">
        <h5 className="card-title text-danger">{producto.nombre}</h5>
        <p className="card-text text-muted">{producto.descripcion}</p>
        <p className="fw-bold">${producto.precio}</p>
        <Link to={`/item/${producto.id}`} className="btn btn-danger text-white">
          Ver detalle
        </Link>
      </div>
    </div>
  );
}

export default Item;
