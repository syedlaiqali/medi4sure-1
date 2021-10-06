import React, { useState, useEffect } from "react";
import axios from "axios";
import { Row, Col } from "react-bootstrap";
import { ProductItem } from "./ProductItem";

export const ProductList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setData([...res.data]));
  }, []);

  console.log("==>", data);
  return (
    <Row>
      {data.length > 0 &&
        data.map((item) => (
          <Col lg={3}>
            <ProductItem item={item} />
          </Col>
        ))}
    </Row>
  );
};
