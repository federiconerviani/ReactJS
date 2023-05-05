import { products } from "../../productsMock";
import ItemList from "./ItemList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();
  console.log = { categoryName };

  useEffect(() => {
    const productsFiltered = products.filter(
      prod => prod.category === categoryName
    );

    const tarea = new Promise((resolve, reject) => {
      resolve(categoryName ? productsFiltered : products);
    });
    tarea.then((res) => setItems(res)).catch((err) => {});
  }, [categoryName]);

  return (
    <div style={{ textAlign: "center" }}>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
