import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export const ProductList = () => {
  return (
    <Button variant="success">
      <Link to="/feedback">Sample Data</Link>
    </Button>
  );
};
