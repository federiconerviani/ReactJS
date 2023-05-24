import { PropagateLoader } from "react-spinners";
import ItemList from "./ItemList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebaseConfig";
import { getDocs, collection, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();
  console.log = { categoryName };

  useEffect(() => {
    let consulta;

    const itemCollection = collection(db, "products");
    if (categoryName) {
      const itemsCollectionFiltered = query(
        itemCollection,
        where("category", "==", categoryName)
      );
      consulta = itemsCollectionFiltered;
    } else {
      consulta = itemCollection;
    }

    getDocs(consulta)
      .then((res) => {
        const products = res.docs.map((product) => {
          return { ...product.data(), id: product.id };
        });
        setItems(products);
      })
      .catch();
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
