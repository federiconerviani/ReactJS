import { AiOutlineShoppingCart } from "react-icons/ai";
import "./CartWidget.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

const CartWidget = () => {
  const { cart } = useContext(CartContext);

  
  return (
    <Link to="/cart">
      <div className="containerCart">
        <AiOutlineShoppingCart size={40} color="blue" />
      </div>
      <div className="burbuja">
        <span>{cart.length}</span>
      </div>
    </Link>
  );
};
export default CartWidget;
