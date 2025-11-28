import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { cartQuantity } = useContext(CartContext);

  return (
    <Link to="/cart" style={{ textDecoration: "none" }}>
      <div
        className="cart-widget"
        style={{ position: "relative", cursor: "pointer" }}
      >
        <img src="/carrito.PNG" alt="carrito" className="carrito" />
        {cartQuantity() > 0 && (
          <span
            className="cart-count"
            style={{
              position: "absolute",
              top: "-10px",
              right: "-10px",
              backgroundColor: "#d32f2f",
              color: "#fff",
              borderRadius: "50%",
              padding: "4px 8px",
              fontSize: "0.9rem",
              fontWeight: "bold",
            }}
          >
            {cartQuantity()}
          </span>
        )}
      </div>
    </Link>
  );
};

export default CartWidget;
