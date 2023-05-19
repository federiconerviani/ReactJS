import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import Cart from "./Cart";

const CartContainer = () => {
  const { cart, clearCart, deleteProductById, getTotalPrice } =
    useContext(CartContext);

  let total = getTotalPrice();

  return (
    <div>
      <Cart
        cart={cart}
        clearCart={clearCart}
        deleteProductById={deleteProductById}
        total={total}
      />{" "}
    </div>
  );
};

export default CartContainer;
