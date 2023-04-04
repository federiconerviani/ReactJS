import CartWidget from "../CartWidget/CartWidget";
import styles from "./Navbar.module.css";

export const Navbar = () => {
    return (
        <div className = {styles.containerNavbar}>
            <img 
                src="https://res.cloudinary.com/dd4cervcm/image/upload/v1680634494/logo1_nkrsdm.png"
                alt="Logo de la empresa" 
            />
            <ul style={{display: "flex", gap: "30px"}}>
                <li>Nootrópico y concentración</li>
                <li>Performance físico</li>
                <li>Refuerzo inmune</li>
                <li>Longevidad</li>
            </ul>
            <CartWidget />
        </div>

    );
};