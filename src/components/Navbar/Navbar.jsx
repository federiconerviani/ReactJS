import estilosNavbar from "./Navbar.module.css";
import CartWidget from "../CartWidget/CartWidget";
import Counter from "../Counter/Counter";
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
          <li>Medicinales</li>
          <li>Terapéuticos</li>
          <li>Gourmet</li>
        </ul>
        <CartWidget />
        <Counter />
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default Navbar;
