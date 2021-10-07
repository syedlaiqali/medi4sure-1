import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import "./ProductItem.css";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
export const ProductItem = ({ item }) => {
  let query = useQuery();
  query.append("prodId", 4);
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
          <Link to={`/productdetails?prodId=${item.id}`}>
            <Button variant="primary" className="button">
              View Details
            </Button>
          </Link>
          <Button variant="primary" className="button">
            Buy Now
          </Button>
        </Card.Body>
      </Card>
    </React.Fragment>
  );
};
