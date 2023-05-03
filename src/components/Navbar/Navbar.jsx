import estilosNavbar from "./Navbar.module.css";
import CartWidget from "../CartWidget/CartWidget";

const Navbar = ({ saludo, edad }) => {
  return (
    <div className={estilosNavbar.containerNavbar}>
      <img
        src="https://res.cloudinary.com/dd4cervcm/image/upload/v1680634494/logo1_nkrsdm.png"
        alt="Logo página"
      />
      <ul style={{ display: "flex", gap: 50, listStyle: "none" }}>
        <li>Medicinales</li>
        <li>Psicodélicos</li>
        <li>Gourmet</li>
        <li>{saludo}</li>
        <li>{edad}</li>
      </ul>
      <CartWidget />
    </div>
  );
};

export default Navbar;
