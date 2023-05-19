import { AiOutlineShoppingCart } from "react-icons/ai";
import "./CartWidget.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

const CartWidget = () => {
  const { getTotalQuantity } = useContext(CartContext);

  let total = getTotalQuantity();

  return (
    <Link to="/cart">
      <div className="containerCart">
        <AiOutlineShoppingCart size={40} color="blue" />
      </div>
      <div className="burbuja">
        <span>{total}</span>
      </div>
    </Link>
  );
};
export default CartWidget;
