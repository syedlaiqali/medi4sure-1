import React, { useState, useEffect } from "react";
import axios from "axios";
import { Row, Col, FormControl } from "react-bootstrap";
import { ProductItem } from "./ProductItem";
import "./ProductList.css";

export const ProductList = () => {
  const [data, setData] = useState([]);
  const [srchData, setSrchData] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setData([...res.data]);
      setSrchData([...res.data]);
    });
  }, []);

  useEffect(() => {
    const filter = data.filter(
      (item) => item.title.toUpperCase().includes(searchText.toUpperCase()) > 0
    );
    setSrchData([...filter]);
  }, [searchText]);

  console.log("==>", data);
  return (
    <React.Fragment>
      <Row>
        <Col>
          <FormControl
            type="text"
            className="searchbox"
            placeholder="Search..."
            onChange={(e) => setSearchText(e.target.value)}
          ></FormControl>
        </Col>
      </Row>
      <Row>
        {srchData.length > 0 &&
          srchData.map((item) => (
            <Col lg={3}>
              <ProductItem item={item} />
            </Col>
          ))}
      </Row>
    </React.Fragment>
  );
};
