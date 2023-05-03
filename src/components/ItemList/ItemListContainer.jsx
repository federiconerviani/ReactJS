import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { products } from "../../productsMock";

const ItemListContainer = () => {
  //El saludo se borró en clase

  const [items, setItems] = useState([]);

  useEffect(() => {
    const tarea = new Promise((resolve, reject) => {
      resolve(products);
    });

    tarea.then((res) => setItems(res)).catch((error) => console.log(error));
  }, []);

  console.log(items);

  return (
    //El saludo se borró en clase
    <div>
      <ItemList />
    </div>
  );
};

export default ItemListContainer;
