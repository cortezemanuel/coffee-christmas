import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./componentes/Navbar";
import ItemListContainer from "./componentes/ItemListContainer";
import ItemDetailContainer from "./componentes/ItemDetailContainer";
import CartContainer from "./componentes/CartContainer";
import CheckoutRHF from "./componentes/CheckoutRHF";
import Error from "./componentes/Error";
import { CartProvider } from "./context/CartContext";
import Home from "./componentes/Home"; // <-- importamos Home
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home key="home" />} />
          <Route
            path="/categoria/:idCategoria"
            element={
              <ItemListContainer
                saludo="Productos por categoría"
                key={window.location.pathname}
              />
            }
          />
          <Route path="/item/:idProducto" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<CartContainer />} />
          <Route path="/checkout" element={<CheckoutRHF />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
