import { PropagateLoader } from "react-spinners";
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
      (prod) => prod.category === categoryName
    );

    const tarea = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(categoryName ? productsFiltered : products);
      }, 2000);
    });
    tarea.then((res) => setItems(res)).catch((err) => console.log(err));
  }, [categoryName]);

  return (
    <div>
      {items.length === 0 && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <PropagateLoader color="orange" size={40} />
        </div>
      )}

      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
