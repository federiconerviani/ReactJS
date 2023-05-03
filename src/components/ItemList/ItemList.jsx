const ItemList = ({ items }) => {
  return (
    <div style={{ display: "flex", border: "2px solid blue" }}>
      {items.map((elemento) => {
        return (
          <div
            style={{
              border: "2px solid black",
              width: "200px",
              height: "200px",
            }}
          >
            <img src={elemento.img} alt="" style={{ width: "100%" }} />
            <h3>{elemento.title}</h3>
            <h4>{elemento.price}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
