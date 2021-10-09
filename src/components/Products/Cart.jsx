import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export const Cart = () => {
  const [data, setData] = useState([]);
  return (
    <h3>
      {" "}
      <FontAwesomeIcon icon={faShoppingCart} />
      <sup>{data.length}</sup>
    </h3>
  );
};
