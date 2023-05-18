import { Link } from "react-router-dom";
import React from "react";
import CounterContainer from "../Counter/CounterContainer";

const ItemDetail = ({ product, onAdd }) => {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "20%", padding: "20px" }}>
        <img
          src={product.img}
          alt="Imagen del producto"
          style={{ width: "100%" }}
        />
      </div>
      <div style={{ width: "50%", paddingLeft: "20px" }}>
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p style={{ fontWeight: "bold" }}>${product.price}</p>
        <CounterContainer stock={product.stock} onAdd={onAdd}/>
        <Link to="/">Volver al home</Link>
      </div>
    </div>
  );
};

export default ItemDetail;
