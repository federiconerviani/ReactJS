import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import ItemDetail from "./ItemDetail";
import { CartContext } from "../Context/CartContext";
import Swal from "sweetalert2";
import { db } from "../../firebaseConfig";
import { getDoc, collection, doc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});

  const { agregarAlCarrito, getQuantityById } = useContext(CartContext);

  const { id } = useParams();

  useEffect(() => {
    const itemCollection = collection(db, "products");
    const refDoc = doc(itemCollection, id);
    getDoc(refDoc)
      .then((res) => setProduct({ ...res.data(), id: res.id }))
      .catch();
  }, [id]);

  const onAdd = (cantidad) => {
    let data = { ...product, quantity: cantidad };
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Producto agregado",
      showConfirmButton: false,
      timer: 1500,
    });

    agregarAlCarrito(data);
  };

  let cantidadTotal = getQuantityById(product.id);

  return (
    <div>
      <ItemDetail
        product={product}
        onAdd={onAdd}
        cantidadTotal={cantidadTotal}
      />
    </div>
  );
};

export default ItemDetailContainer;
