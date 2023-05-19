import React, { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const agregarAlCarrito = (producto) => {
    setCart([...cart, producto]);
  };

  const clearCart = () => {
    setCart([]);
  };

  const deleteProductById = (id) => {
    console.log("el id a eliminar es: ", id);
  };

  let data = { cart, agregarAlCarrito, clearCart, deleteProductById };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
