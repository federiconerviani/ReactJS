import { Button } from "@mui/material";
import React from "react";

const Counter = ({ counter, sumar, restar, onAdd }) => {
  return (
    <div style={{ display: "flex", padding:"20px", gap:"15px" }}>
      <Button variant="contained" onClick={sumar}>
        Sumar
      </Button>
      <h3>{counter}</h3>
      <Button variant="contained" onClick={restar}>
        Restar
      </Button>
      <Button variant="contained" onClick={() => onAdd(counter)}>
        Agregar al carrito
      </Button>
    </div>
  );
};

export default Counter;
