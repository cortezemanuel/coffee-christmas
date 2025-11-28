import { FaShoppingCart } from "react-icons/fa";
import { Badge } from "react-bootstrap";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartWidgetRI = () => {
  const { cartQuantity, cart } = useContext(CartContext);
  console.log(cart);
  return (
    <>
      <FaShoppingCart fontSize={"1.3rem"} />
      {cart.length > 0 && (
        <Badge pill bg="danger">
          {cartQuantity()}
        </Badge>
      )}
    </>
  );
};

export default CartWidgetRI;
