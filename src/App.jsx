import Navbar from "./componentes/Navbar";
import "./App.css";
import ItemListContainer from "./componentes/ItemListContainer";

function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer saludo="Bienvenido a mi app" />
    </>
  );
}

export default App;
