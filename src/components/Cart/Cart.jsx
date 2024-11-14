import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import "./cart.css"
import { BsFillTrash3Fill } from "react-icons/bs"

const ShoppingCart = () => {
  const { cartItems, calculateTotalPrice, removeItemById, clearCart } = useContext(CartContext);

  // Early return if the cart is empty
  if (cartItems.length === 0) {
    return (
      <div className="empty-cart">
        <h2 className="empty-cart-title">Oops... Your cart is empty 😥</h2>
        <Link to="/" className="back-home-button">Return to Home</Link>
      </div>
    );
  }

  return (
    <div className="shopping-cart">
      <h1 className="cart-title">Items in Your Cart</h1>
      {cartItems.map((item) => (
        <div className="cart-item" key={item.id}>
          <img className="cart-item-image" src={item.image} width={90} alt={item.name} />
          <p className="cart-item-name">{item.name}</p>
          <p className="cart-item-price">Unit price: ${item.price}</p>
          <p className="cart-item-quantity">Quantity: {item.quantity}</p>
          <p className="cart-item-subtotal">Subtotal: ${item.price * item.quantity}</p>
          <button className="remove-item-button" onClick={() => removeItemById(item.id)}>
            <BsTrash />
          </button>
        </div>
      ))}

      <div className="cart-summary">
        <p className="total-price">Total Price: ${calculateTotalPrice()}</p>
        <button className="clear-cart-button" onClick={clearCart}>Empty Cart</button>
        <Link to="/checkout" className="checkout-button">Proceed to Checkout</Link>
      </div>
    </div>
  );
};

export default ShoppingCart;