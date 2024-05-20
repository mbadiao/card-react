// Image.js
import React from "react";
import product from "./product";
import "./index.css";
const Image = () => {
  return (
    <img
      className="img rounded"
      src={product.imageUrl}
      alt={product.name}
    />
  );
};


export default Image;
