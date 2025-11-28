import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../service/firebase";

function ItemDetailContainer() {
  const [producto, setProducto] = useState(null);
  const [loader, setLoader] = useState(false);
  const { idProducto } = useParams();

  useEffect(() => {
    setLoader(true);
    const productRef = doc(db, "productos", idProducto);

    getDoc(productRef)
      .then((res) => {
        if (res.exists()) setProducto({ id: res.id, ...res.data() });
      })
      .finally(() => setLoader(false));
  }, [idProducto]);

  return (
    <div className="container mt-4">
      {loader ? (
        <p className="text-center mt-4">Cargando producto...</p>
      ) : (
        producto && <ItemDetail producto={producto} />
      )}
    </div>
  );
}

export default ItemDetailContainer;
