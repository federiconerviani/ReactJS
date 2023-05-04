import { products } from "../../productsMock";
import ItemList from "./ItemList";
import { useState, useEffect } from "react";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const tarea = new Promise((resolve, reject) => {
      resolve(products);
    });
    tarea.then((res) => setItems(res)).catch((err) => {});
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
