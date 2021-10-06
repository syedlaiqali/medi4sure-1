import React from "react";
import { Card, Button } from "react-bootstrap";
import "./ProductItem.css";

export const ProductItem = ({ item }) => {
  return (
    <React.Fragment>
      <Card
        style={{
          margin: "5px",
          backgroundColor: "lightblue",
        }}
      >
        <Card.Img variant="top" src={item.image} style={{ height: "200px" }} />
        <Card.Body>
          <Card.Title>{`${item.title
            .split("")
            .slice(0, 20)
            .join("")}...`}</Card.Title>
          <Card.Text className="containerDesc">{`${item.description
            .split("")
            .slice(0, 150)
            .join("")}...`}</Card.Text>
          <Button variant="primary">View Details</Button>
        </Card.Body>
      </Card>
    </React.Fragment>
  );
};
