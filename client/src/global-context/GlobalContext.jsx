import React, { createContext, useState } from "react";
import { products } from "../database/database";
import { toast } from "react-toastify";

// StoreContext
export const StoreContext = createContext();
function GlobalContext({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [favorite, setFavorite] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Function to handle product click (show product details)
  const handleProductClick = (productId) => {
    const product = products.find((p) => p._id === productId);
    setSelectedProduct(product);
  };

  // getTotalCartAmount function
  const getTotalCartAmount = () => {
    return cartItems.reduce((total, item) => {
      return total + item.regularPrice * item.quantity;
    }, 0);
  };

  // addToCart function
  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
    toast.success(`${cartItems.length + 1} items added!`);
  };
  // removeToCart function
  const removeFromCart = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item._id !== itemId)
    );
    toast.error(`1 items remove!`);
  };
  // Check if the product is in the cart
  const isInCart = (itemId) => cartItems.some((item) => item._id === itemId);

  // removeItems function
  const removeItems = (itemId) => {
    setFavorite((prevItems) => prevItems.filter((item) => item._id !== itemId));
    toast.error(`remove item!`);
  };

  // contextValue
  const contextValue = {
    cartItems,
    setCartItems,
    favorite,
    setFavorite,
    getTotalCartAmount,
    addToCart,
    removeFromCart,
    isInCart,
    removeItems,
    selectedProduct,
    setSelectedProduct,
    handleProductClick,
    products,
  };
  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
}

export default GlobalContext;
