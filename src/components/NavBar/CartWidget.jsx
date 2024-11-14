import { useContext } from "react"
import { CartContext } from "../../context/CartContext";
import { PiShoppingCartBold } from "react-icons/pi";
import { Link } from "react-router-dom";

const ShoppingCartWidget = () => {
  const { getTotalQuantity } = useContext(CartContext);

  const quantity = getTotalQuantity();

  return (
    <Link to="/cart" className="shopping-cart-widget">
      <PiShoppingCartBold className={quantity > 0 ? "active-cart-icon" : "inactive-cart-icon"} />
      {quantity > 0 && <p className="cart-quantity">{quantity}</p>}
    </Link>
  );
};

export default ShoppingCartWidget;
