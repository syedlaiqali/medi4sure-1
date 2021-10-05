import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { ProductItem } from "./ProductItem";

export const ProductList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setData([...res.data]));
    console.log("In Component Mount");
  }, []);

  return (
    <div>
      {data.length > 0 && data.map((item) => <ProductItem item={item} />)}
    </div>
  );
};
