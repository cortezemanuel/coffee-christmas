function ItemDetail({ producto }) {
  return (
    <div className="card text-center p-4 shadow" style={{ marginTop: "90px" }}>
      <img
        src={producto.imagen}
        className="card-img-top mx-auto"
        alt={producto.nombre}
        style={{ maxWidth: "250px", borderRadius: "10px" }}
      />
      <div className="card-body">
        <h3>{producto.nombre}</h3>
        <p>{producto.descripcion}</p>
        <h5 className="text-danger">${producto.precio}</h5>
        <button className="btn btn-success mt-2">Agregar al carrito</button>
      </div>
    </div>
  );
}

export default ItemDetail;
