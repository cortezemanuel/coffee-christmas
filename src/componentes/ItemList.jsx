import Item from "./Item";

function ItemList({ items }) {
  return (
    <div className="container mt-4">
      <div className="row">
        {items.map((prod) => (
          <div key={prod.id} className="col-md-3 mb-4">
            <Item producto={prod} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ItemList;
