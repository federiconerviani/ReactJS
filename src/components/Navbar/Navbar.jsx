import estilosNavbar from "./Navbar.module.css";
import CartWidget from "../CartWidget/CartWidget";
import { Outlet, Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

const Navbar = () => {
  const { cart } = useContext(CartContext);
  return (
    <div>
      <div className={estilosNavbar.containerNavbar}>
        <Link to={"/"}>
          <img
            className={estilosNavbar.logo}
            src="https://res.cloudinary.com/dd4cervcm/image/upload/v1680634494/logo1_nkrsdm.png"
            alt="Logo página"
          />
        </Link>
        <ul className={estilosNavbar.lista}>
          <Link to="/">Todo</Link>
          <Link to="/category/medicinal">Medicinales</Link>
          <Link to="/category/terapeutico">Terapéuticos</Link>
          <Link to="/category/gourmet">Gourmet</Link>
        </ul>
        {cart.length > 0 && (
          <div>
            <CartWidget />
          </div>
        )}
      </div>
      <Outlet />
    </div>
  );
};

export default Navbar;
