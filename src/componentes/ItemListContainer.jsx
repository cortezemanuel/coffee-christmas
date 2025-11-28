import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ItemList from "./ItemList";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../service/firebase";

function ItemListContainer({ saludo }) {
  const [items, setItems] = useState([]);
  const [loader, setLoader] = useState(false);
  const [invalid, setInvalid] = useState(false);
  const { idCategoria } = useParams();

  useEffect(() => {
    setLoader(true);

    const productsCollection = idCategoria
      ? query(
          collection(db, "productos"),
          where("categoria", "==", idCategoria)
        )
      : collection(db, "productos");

    getDocs(productsCollection)
      .then((res) => {
        const list = res.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        if (list.length === 0) setInvalid(true);
        else setInvalid(false);
        setItems(list);
      })
      .catch(() => setInvalid(true))
      .finally(() => setLoader(false));
  }, [idCategoria]);

  if (invalid) {
    return (
      <div>
        <h1>El producto no existe!!</h1>
        <Link className="btn btn-danger" to="/">
          Volver a Home
        </Link>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h2 className="text-center text-danger">{saludo}</h2>
      {loader ? (
        <p className="text-center mt-5">Cargando productos...</p>
      ) : (
        <ItemList items={items} />
      )}
    </div>
  );
}

export default ItemListContainer;
