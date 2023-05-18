import React from "react";

const Counter = ({ counter, sumar, restar, onAdd }) => {
  return (
    <div>
      <button onClick={sumar}>Sumar</button>
      <h3>{counter}</h3>
      <button onClick={restar}>Restar</button>
      <button onClick={() => onAdd(counter)}>Agregar al carrito</button>
    </div>
  );
};

export default Counter;
