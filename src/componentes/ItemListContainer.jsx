import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import productos from "../data/productos";
import ItemList from "./ItemList";

function ItemListContainer({ saludo }) {
  const [items, setItems] = useState([]);
  const { idCategoria } = useParams();

  useEffect(() => {
    const obtenerProductos = new Promise((resolve) => {
      setTimeout(() => {
        resolve(productos);
      }, 1000);
    });

    obtenerProductos.then((res) => {
      if (idCategoria) {
        setItems(res.filter((prod) => prod.categoria === idCategoria));
      } else {
        setItems(res);
      }
    });
  }, [idCategoria]);

  return (
    <div className="container mt-4">
      <h2 className="text-center text-danger">{saludo}</h2>
      {items.length === 0 ? (
        <p className="text-center mt-5">Cargando productos...</p>
      ) : (
        <ItemList items={items} />
      )}
    </div>
  );
}

export default ItemListContainer;
