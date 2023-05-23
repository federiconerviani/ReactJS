import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Cart = ({ cart, clearCart, deleteProductById, total }) => {
  return (
    <div style={{margin:"30px"}}>
      <h1>CARRITO</h1>{" "}
      {cart.map((product) => {
        return (
          <div key={product.id} style={{ border: "2px solid black" }}>
            <h3>Producto: {product.title}</h3>
            <h4>Precio por unidad: ${product.price}</h4>
            <h4>Cantidad: {product.quantity}</h4>           
            <Button
              variant="contained"
              onClick={() => deleteProductById(product.id)}
            >
              Eliminar
            </Button>
          </div>
        );
      })}{" "}
      {cart.length > 0 ? (
        <div>
          <h3>El total es ${total}</h3>
          <Button onClick={clearCart} variant="contained">
            Vaciar Carrito
          </Button>
        </div>
      ) : (
        <div><h3>¡Tu carrito está vacío!</h3>
          <Link to="/">
            <Button variant="contained">Agregar Productos</Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
