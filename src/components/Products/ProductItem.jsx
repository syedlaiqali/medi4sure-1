import React from "react";
import "./ProductItem.css";

export const ProductItem = ({ item }) => {
  return (
    <div className="proditem">
      <h5>{item.title}</h5>
    </div>
  );
};
