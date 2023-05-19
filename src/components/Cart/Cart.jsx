import React from "react";

const Cart = ({ cart }) => {
  return (
    <div>
      <h1>CARRITO</h1>{" "}
      {cart.map((e) => (
        <h1 key={e.id}>{e?.title}</h1>
      ))}{" "}
    </div>
  );
};

export default Cart;
