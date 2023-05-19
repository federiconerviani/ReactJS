import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import Cart from "./Cart";

const CartContainer = () => {
  const { cart } = useContext(CartContext);

  return <div><Cart cart={cart}/> </div>;
};

export default CartContainer;
