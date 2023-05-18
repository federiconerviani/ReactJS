import estilosNavbar from "./Navbar.module.css";
import CartWidget from "../CartWidget/CartWidget";
import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
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
        <CartWidget />
      </div>
      <Outlet />
    </div>
  );
};

export default Navbar;
