import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("carrito")) || []
  );

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(cart));
  }, [cart]);

  const addItem = (item, qty) => {
    const newItem = {
      id: item.id,
      name: item.nombre || item.name,
      price: item.precio || item.price,
      img: item.imagen || item.img,
      stock: item.stock,
      quantity: qty,
    };

    if (cart.some((prod) => prod.id === newItem.id)) {
      setCart(
        cart.map((prod) =>
          prod.id === newItem.id
            ? { ...prod, quantity: prod.quantity + qty }
            : prod
        )
      );
    } else {
      setCart([...cart, newItem]);
    }
  };

  const removeItem = (id) => {
    setCart(cart.filter((prod) => prod.id !== id));
  };

  const clear = () => {
    setCart([]);
  };

  const total = () => {
    return cart.reduce((acc, prod) => acc + prod.quantity * prod.price, 0);
  };

  const cartQuantity = () => {
    return cart.reduce((acc, prod) => acc + prod.quantity, 0);
  };

  const itemQuantity = (id) => {
    const itemInCart = cart.find((prod) => prod.id === id);
    return itemInCart ? itemInCart.quantity : 0;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        clear,
        total,
        cartQuantity,
        itemQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
