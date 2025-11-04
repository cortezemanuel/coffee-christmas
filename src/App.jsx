import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./componentes/Navbar";
import ItemListContainer from "./componentes/ItemListContainer";
import ItemDetailContainer from "./componentes/ItemDetailContainer";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<ItemListContainer saludo="Bienvenido a Coffee Christmas" />}
        />
        <Route path="/categoria/:idCategoria" element={<ItemListContainer />} />
        <Route path="/item/:idProducto" element={<ItemDetailContainer />} />
        <Route
          path="*"
          element={
            <h2 style={{ textAlign: "center", marginTop: "100px" }}>
              Página no encontrada
            </h2>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
