import axios from "axios";
import React, { useEffect, useState } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import { useLocation, Link } from "react-router-dom";

export const ProductDetails = () => {
  const [prodid, setProdid] = useState("4");
  const [product, setProduct] = useState([]);
  const query = new URLSearchParams(useLocation().search);

  useEffect(async () => {
    const result = await axios.get("https://fakestoreapi.com/products");
    const filter = result.data.filter((item) => item.id == query.get("prodId"));
    setProduct([...filter]);
    console.log("Product==", filter[0], "--param--", query.get("prodId"));
  }, []);
  return (
    <React.Fragment>
      {product.length > 0 && (
        <Row>
          <Col>
            <Card
              style={{
                margin: "5px",
                backgroundColor: "lightblue",
              }}
            >
              <Card.Img
                variant="top"
                src={product[0].image}
                style={{ height: "500px" }}
              />
            </Card>
          </Col>
          <Col>
            <Card
              style={{
                margin: "5px",
                backgroundColor: "lightblue",
              }}
            >
              <Card.Body>
                <Card.Title>{product[0].title}</Card.Title>
                <Card.Text className="containerDesc">
                  {product[0].description}
                </Card.Text>
                <Link to={`/products`}>
                  <Button variant="primary" className="button">
                    Back
                  </Button>
                </Link>
                <Button variant="primary" className="button">
                  Buy Now
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}
    </React.Fragment>
  );
};
