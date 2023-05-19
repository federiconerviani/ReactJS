import { Button } from "@mui/material";
import React from "react";

const Cart = ({ cart, clearCart, deleteProductById, total }) => {
  return (
    <div>
      <h1>CARRITO</h1>{" "}
      {cart.map((product) => {
        return (
          <div key={product.id} style={{ border: "2px solid black" }}>
            <h3>{product.title}</h3>
            <h4>{product.price}</h4>
            <h4>{product.quantity}</h4>
            <Button
              variant="contained"
              onClick={() => deleteProductById(product.id)}
            >
              Eliminar
            </Button>
          </div>
        );
      })}{" "}
      <h3>El total es ${total}</h3>
      <Button onClick={clearCart} variant="contained">
        Vaciar Carrito
      </Button>
    </div>
  );
};

export default Cart;
