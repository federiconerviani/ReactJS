import { AiOutlineShoppingCart } from "react-icons/ai";
import estilosCart from "./CartWidget.module.css";
import { Link } from "react-router-dom";

const CartWidget = () => {
  return (
    <Link to="/cart">
      <div className={estilosCart.containerCart}>
        <AiOutlineShoppingCart size={40} color="blue" />
      </div>
    </Link>
  );
};

export default CartWidget;
