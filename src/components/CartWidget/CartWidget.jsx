import { AiOutlineShoppingCart } from "react-icons/ai";
import estilosCart from "./CartWidget.module.css";

const CartWidget = () => {
  return (
    <div className={estilosCart.containerCart}>
      <AiOutlineShoppingCart size={40} color="blue" />
    </div>
  );
};

export default CartWidget;
