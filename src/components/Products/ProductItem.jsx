import React from "react";
import { Card, Button } from "react-bootstrap";
import "./ProductItem.css";

export const ProductItem = ({ item }) => {
  return (
    <Card
      style={{
        width: "18rem",
        margin: "5px",
        backgroundColor: "lightblue",
      }}
    >
      <Card.Img variant="top" src={item.image} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>{`${item.description
          .split("")
          .slice(0, 200)
          .join("")}...`}</Card.Text>
        <Button variant="primary">View Details</Button>
      </Card.Body>
    </Card>
  );
};
