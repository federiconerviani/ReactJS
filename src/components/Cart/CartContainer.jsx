import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import Cart from "./Cart";

const CartContainer = () => {
  const { cart, clearCart, deleteProductById } = useContext(CartContext);

  return (
    <div>
      <Cart cart={cart} clearCart={clearCart} deleteProductById={deleteProductById} />{" "}
    </div>
  );
};

export default CartContainer;
