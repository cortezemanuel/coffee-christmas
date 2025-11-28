import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../service/firebase";
import { Link } from "react-router-dom";
import EmptyCart from "./EmptyCart";

const Checkout = () => {
  const [buyer, setBuyer] = useState({});
  const [secondMail, setSecondMail] = useState("");
  const [error, setError] = useState(null);
  const [orderId, setOrderId] = useState(null);
  const { cart, total, clear } = useContext(CartContext);

  const buyerData = (e) => {
    setBuyer({
      ...buyer,
      [e.target.name]: e.target.value,
    });
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

      const ventas = collection(db, "orders");
      addDoc(ventas, order)
        .then((res) => {
          setOrderId(res.id);
          clear();
        })
        .catch((err) => console.log(err));
    }
  };

  if (!cart.length && !orderId) {
    return <EmptyCart />;
  }

  return (
    <>
      {orderId ? (
        <div className="container mt-5 text-center">
          <h2>Muchas gracias por su compra</h2>
          <h4>Su orden es: {orderId}</h4>
          <Link className="btn btn-dark mt-3" to="/">
            Volver a Home
          </Link>
        </div>
      ) : (
        <div className="container mt-5 d-flex justify-content-center">
          <div className="w-100" style={{ maxWidth: "500px" }}>
            <h1 className="mb-4 text-center">Complete con sus datos</h1>
            {error && <div className="alert alert-danger">{error}</div>}
            <form
              className="p-4 border rounded shadow-sm bg-light"
              onSubmit={finalizarCompra}
            >
              <input
                className="form-control mb-3"
                name="name"
                type="text"
                placeholder="Ingresa tu nombre"
                onChange={buyerData}
              />
              <input
                className="form-control mb-3"
                name="lastname"
                type="text"
                placeholder="Ingresa tu apellido"
                onChange={buyerData}
              />
              <input
                className="form-control mb-3"
                name="address"
                type="text"
                placeholder="Ingresa tu dirección"
                onChange={buyerData}
              />
              <input
                className="form-control mb-3"
                name="mail"
                type="email"
                placeholder="Ingresa tu correo"
                onChange={buyerData}
              />
              <input
                className="form-control mb-3"
                name="secondmail"
                type="email"
                placeholder="Repetí tu correo"
                onChange={(e) => setSecondMail(e.target.value)}
              />
              <button type="submit" className="btn btn-success w-100">
                Completar Compra
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Checkout;
