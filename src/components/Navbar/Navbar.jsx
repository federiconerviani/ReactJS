import estilosNavbar from "./Navbar.module.css";
import CartWidget from "../CartWidget/CartWidget";
import Counter from "../Counter/Counter";

const Navbar = ({ saludo, edad }) => {
  return (
    <div className={estilosNavbar.containerNavbar}>
      <img
        className={estilosNavbar.logo}
        src="https://res.cloudinary.com/dd4cervcm/image/upload/v1680634494/logo1_nkrsdm.png"
        alt="Logo página"
      />
      <ul className={estilosNavbar.lista}>
        <li>Medicinales</li>
        <li>Terapéuticos</li>
        <li>Gourmet</li>
      </ul>
      <CartWidget />
      <Counter />
    </div>
  );
};

export default Navbar;
