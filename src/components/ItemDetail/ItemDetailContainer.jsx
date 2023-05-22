import { useParams } from "react-router-dom";
import { products } from "../../productsMock";
import { useState, useEffect, useContext } from "react";
import ItemDetail from "./ItemDetail";
import { CartContext } from "../Context/CartContext";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});

  const { agregarAlCarrito, getQuantityById } = useContext(CartContext);

  const { id } = useParams();

  useEffect(() => {
    let encontrado = products.find((prod) => prod.id === Number(id));
    setProduct(encontrado);
  }, [id]);

  const onAdd = (cantidad) => {
    let data = { ...product, quantity: cantidad };
    alert(`Se agregaron al carrito ${cantidad} unidad/es de ${product.title}`);
    
    agregarAlCarrito(data);
  };

  let cantidadTotal = getQuantityById(product.id)
    
  return (
    <div>
      <ItemDetail product={product} onAdd={onAdd} cantidadTotal={cantidadTotal}/>
    </div>
  );
};

export default ItemDetailContainer;
