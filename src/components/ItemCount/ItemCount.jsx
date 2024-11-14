import { useState } from "react"
import "./itemcount.css"
const ItemCount = ({ stock, addProduct }) => {
  const [count, setCount] = useState(1);

  const handleClickDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleClickIncrement = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  return (
    <div className="item-count">
      <div className="controls-count">
        <button onClick={handleClickDecrement} disabled={count <= 1}>-</button>
        <p className="total-display">{count}</p>
        <button onClick={handleClickIncrement} disabled={count >= stock}>+</button>
      </div>
      <button className="button-add-count" onClick={() => addProduct(count)}>
        Agregar producto
      </button>
    </div>
  );
};

export default ItemCount;