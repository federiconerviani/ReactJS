import { AiOutlineShoppingCart } from "react-icons/ai";
import "./CartWidget.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

const CartWidget = () => {
  const { getTotalQuantity } = useContext(CartContext);

  let total = getTotalQuantity();

  return (
    <div className="containerCart">
      <Link to="/cart" style={{ textDecoration: "none" }}>
        <div className="carrito">
          <AiOutlineShoppingCart size={35} color="blue" />
        </div>
        <div className="burbuja">
          <span>{total}</span>
        </div>
      </Link>
    </div>
  );
};
export default CartWidget;
