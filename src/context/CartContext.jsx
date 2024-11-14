import { createContext, useState } from "react";

const ShoppingCartContext = createContext();

const ShoppingCartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (product) => {
    const existsInCart = checkIfInCart(product.id);
    if (existsInCart) {

      const updatedCart = [...cartItems];
      const itemIndex = updatedCart.findIndex((item) => item.id === product.id);
      updatedCart[itemIndex].quantity += product.quantity;

      setCartItems(updatedCart);
    } else {
    
      setCartItems([...cartItems, product]);
    }
  };


  const checkIfInCart = (productId) => {
    return cartItems.some((item) => item.id === productId);
  };

  
  const totalItemsCount = () => {
    return cartItems.reduce((accum, item) => accum + item.quantity, 0);
  };

 
  const totalPurchaseAmount = () => {
    return cartItems.reduce((accum, item) => accum + item.quantity * item.price, 0);
  };

  const removeItemById = (productId) => {
    const remainingItems = cartItems.filter((item) => item.id !== productId);
    setCartItems(remainingItems);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        cartItems,
        addItemToCart,
        totalItemsCount,
        totalPurchaseAmount,
        removeItemById,
        clearCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export { ShoppingCartProvider, ShoppingCartContext };

