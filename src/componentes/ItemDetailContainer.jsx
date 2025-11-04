import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import productos from "../data/productos";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
  const [item, setItem] = useState(null);
  const { idProducto } = useParams();

  useEffect(() => {
    const obtenerProducto = new Promise((resolve) => {
      setTimeout(() => {
        resolve(productos.find((prod) => prod.id === parseInt(idProducto)));
      }, 1000);
    });

    obtenerProducto.then((res) => setItem(res));
  }, [idProducto]);

  return (
    <div className="container mt-4">
      {item ? <ItemDetail producto={item} /> : <p>Cargando producto...</p>}
    </div>
  );
}

export default ItemDetailContainer;
