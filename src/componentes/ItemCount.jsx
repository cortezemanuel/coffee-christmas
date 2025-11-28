import { useState } from "react";

const ItemCount = ({ stock, onAdd }) => {
  const [count, setCount] = useState(1);

  const sumar = () => {
    if (count < stock) setCount(count + 1);
  };

  const restar = () => {
    if (count > 0) setCount(count - 1);
  };

  const ejecutarCompra = () => {
    onAdd(count);
  };

  return (
    <>
      {stock > 0 ? (
        <>
          <div>
            <button
              className="btn-xmas"
              onClick={restar}
              disabled={count === 0}
            >
              -
            </button>

            <span className="btn-xmas" style={{ margin: "0 10px" }}>
              {count}
            </span>

            <button className="btn-xmas" onClick={sumar}>
              +
            </button>
          </div>

          <button
            className="btn-xmas"
            onClick={ejecutarCompra}
            disabled={count === 0 || stock === 0}
            style={{ marginTop: "15px" }}
          >
            Comprar
          </button>
        </>
      ) : (
        <p>Lo sentimos, por el momento no hay unidades disponibles</p>
      )}
    </>
  );
};

export default ItemCount;
