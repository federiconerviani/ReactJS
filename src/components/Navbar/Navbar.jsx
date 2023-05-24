import estilosNavbar from "./Navbar.module.css";
import CartWidget from "../CartWidget/CartWidget";
import { Outlet, Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../Context/CartContext";
import { db } from "../../firebaseConfig";
import { getDocs, collection } from "firebase/firestore";

const Navbar = () => {
  const { cart } = useContext(CartContext);

  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const categoriesCollection = collection(db, "categories");
    getDocs(categoriesCollection)
      .then((res) => {
        let categoriesResult = res.docs.map((category) => {
          return { ...category.data(), id: category.id };
        });
        setCategories(categoriesResult);
      })
      .catch();
  }, []);
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
          {categories.map((category) => {
            return (
              <Link key={category.id} to={category.path}>
                {category.title}
              </Link>
            );
          })}
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
