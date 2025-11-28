import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../service/firebase";
import { Link } from "react-router-dom";
import EmptyCart from "./EmptyCart";

const CheckoutRHF = () => {
  const [buyer, setBuyer] = useState({});
  const [secondMail, setSecondMail] = useState("");
  const [error, setError] = useState(null);
  const [orderId, setOrderId] = useState(null);
  const { cart, total, clear } = useContext(CartContext);

  const handleInput = (e) => {
    setBuyer({ ...buyer, [e.target.name]: e.target.value });
  };

  const finalizarCompra = (e) => {
    e.preventDefault();
    if (!buyer.name || !buyer.lastname || !buyer.mail || !buyer.address) {
      setError("Complete todos los campos");
    } else if (buyer.mail !== secondMail) {
      setError("Los correos no coinciden");
    } else {
      setError(null);
      const order = {
        comprador: buyer,
        compras: cart,
        total: total(),
        fecha: serverTimestamp(),
      };
      addDoc(collection(db, "orders"), order)
        .then((res) => {
          setOrderId(res.id);
          clear();
        })
        .catch((err) => console.log(err));
    }
  };

  if (!cart.length && !orderId) return <EmptyCart />;

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "2rem auto",
        padding: "2rem",
        borderRadius: "15px",
        background: "linear-gradient(to bottom, #fff0f5, #ffe6e6)",
        boxShadow: "0 4px 15px rgba(255, 0, 0, 0.3)",
        border: "2px solid #ff0000",
      }}
    >
      {orderId ? (
        <div style={{ textAlign: "center", color: "#b30000" }}>
          <h2>🎄 ¡Gracias por tu compra! 🎄</h2>
          <h4>Tu orden es: {orderId}</h4>
          <Link className="btn btn-danger mt-3" to="/">
            Volver a Home
          </Link>
        </div>
      ) : (
        <>
          <h2 style={{ color: "#b30000", textAlign: "center" }}>
            Completa tus datos 🎁
          </h2>
          {error && (
            <p
              style={{
                color: "#ff0000",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              {error}
            </p>
          )}
          <form
            onSubmit={finalizarCompra}
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <input
              name="name"
              placeholder="Nombre"
              className="form-control"
              onChange={handleInput}
              style={{ border: "2px solid #ff0000", borderRadius: "8px" }}
            />
            <input
              name="lastname"
              placeholder="Apellido"
              className="form-control"
              onChange={handleInput}
              style={{ border: "2px solid #ff0000", borderRadius: "8px" }}
            />
            <input
              name="address"
              placeholder="Dirección"
              className="form-control"
              onChange={handleInput}
              style={{ border: "2px solid #ff0000", borderRadius: "8px" }}
            />
            <input
              name="mail"
              placeholder="Correo"
              type="email"
              className="form-control"
              onChange={handleInput}
              style={{ border: "2px solid #ff0000", borderRadius: "8px" }}
            />
            <input
              name="secondmail"
              placeholder="Repite tu correo"
              type="email"
              className="form-control"
              onChange={(e) => setSecondMail(e.target.value)}
              style={{ border: "2px solid #ff0000", borderRadius: "8px" }}
            />
            <button
              type="submit"
              className="btn btn-danger"
              style={{
                marginTop: "10px",
                background: "#ff0000",
                borderColor: "#b30000",
                fontWeight: "bold",
              }}
            >
              Completar Compra
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default CheckoutRHF;
