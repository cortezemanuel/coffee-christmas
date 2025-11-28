import React, { useState, useContext } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ItemDetail = ({ producto }) => {
  const { addItem, itemQuantity } = useContext(CartContext);
  const [purchase, setPurchase] = useState(false);

  const onAdd = (cantidad) => {
    setPurchase(true);
    addItem(
      {
        id: producto.id,
        name: producto.nombre,
        price: producto.precio,
        img: producto.imagen,
        stock: producto.stock,
      },
      cantidad
    );
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: `Agregaste ${producto.nombre} al carrito`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const stockActualizado = producto.stock - itemQuantity(producto.id);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      <h1>{producto.nombre}</h1>

      <img
        src={producto.imagen}
        alt={producto.nombre}
        style={{
          width: "300px",
          height: "300px",
          objectFit: "cover",
          borderRadius: "10px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
          marginBottom: "20px",
        }}
      />

      <p>{producto.descripcion}</p>
      <p>${producto.precio}</p>
      <p>Stock disponible: {stockActualizado}</p>

      {purchase ? (
        <Link className="btn btn-dark" to="/cart">
          Terminar compra
        </Link>
      ) : (
        <ItemCount stock={stockActualizado} onAdd={onAdd} />
      )}
    </div>
  );
};

export default ItemDetail;
