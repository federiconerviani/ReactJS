import ItemList from "./ItemList";

const ItemListContainer = ({ saludo, año }) => {
  return (
    <div style={{ textAlign: "center" }}>
      <ItemList saludo={saludo} año={año} />
    </div>
  );
};

export default ItemListContainer;
