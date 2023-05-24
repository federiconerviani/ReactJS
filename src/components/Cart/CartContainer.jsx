import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import Cart from "./Cart";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CartContainer = () => {
  const { cart, clearCart, deleteProductById, getTotalPrice } =
    useContext(CartContext);

  let total = getTotalPrice();
  const navigate = useNavigate();

  const clearCartWithAlert = () => {
    Swal.fire({
      title: "¿Estás seguro de vaciar el carrito?",
      text: "¡No lo podrás deshacer!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, vaciar",
      cancelButtonText: "¡No, cancelar!",
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        Swal.fire("Confirmado", "Tu carrito está vacío!", "success");
      }
    });
  };

  return (
    <div>
      <Cart
        navigate={navigate}
        cart={cart}
        clearCartWithAlert={clearCartWithAlert}
        deleteProductById={deleteProductById}
        total={total}
      />{" "}
    </div>
  );
};

export default CartContainer;
