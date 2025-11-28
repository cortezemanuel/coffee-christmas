import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CartView = () => {
  const { cart, removeItem, clear, total } = useContext(CartContext);

  const preConfirm = () => {
    Swal.fire({
      icon: "question",
      title: "¿Estas seguro de borrar todo?",
      showDenyButton: true,
      denyButtonText: "No",
      confirmButtonText: "Si",
    }).then((result) => {
      if (result.isConfirmed) clear();
    });
  };

  return (
    <div className="container mt-4">
      <h1>Tu carrito 🛒</h1>
      <div>
        {cart.map((compra) => (
          <div
            key={compra.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              padding: "1rem",
              borderBottom: "1px solid #ccc",
            }}
          >
            <img
              src={compra.img}
              alt={compra.name}
              style={{ width: "80px", borderRadius: "5px" }}
            />
            <span>{compra.name}</span>
            <span>${compra.price}</span>
            <span>Cantidad: {compra.quantity}</span>
            <span>Subtotal: ${compra.quantity * compra.price}</span>
            <button
              className="btn btn-danger"
              onClick={() => removeItem(compra.id)}
            >
              X
            </button>
          </div>
        ))}
      </div>

      <h3>Total a pagar: ${total()}</h3>

      <div style={{ marginTop: "20px" }}>
        <button className="btn btn-danger me-2" onClick={preConfirm}>
          Vaciar carrito
        </button>
        <Link className="btn btn-success" to="/checkout">
          Terminar compra
        </Link>
      </div>
    </div>
  );
};

export default CartView;
