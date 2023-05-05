import { Link } from "react-router-dom";
import React from "react";

const ItemDetail = ({ product }) => {
  return (
    <div>
      <div style={{width:"200px"}}>
      <img src={product.img} alt="" />
      </div>
      <h2>{product.title}</h2>
      <h2>{product.description}</h2>
      <Link to="/">Volver al home</Link>
    </div>
  );
};

export default ItemDetail;
