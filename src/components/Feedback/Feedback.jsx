import React, { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { HeaderForComp } from "../Common/HeaderForComp";
import "./Feedback.css";

export const Feedback = () => {
  const [val, setVal] = useState("Welcome to PickupBiz!!!");
  const handleSubmit = () => {
    setVal("Thanks for coming to us!!!!");
  };
  return (
    <Form>
      <HeaderForComp title="Feedback" />
      <Form.Control
        placeholder="Enter the Title..."
        className="fbrow"
        value={val}
      ></Form.Control>
      <Form.Control
        as="textarea"
        placeholder="Enter Feedback here..."
        className="fbrow"
      ></Form.Control>
      <Row className="fbrow">
        <Col lg={8}></Col>
        <Col lg={1}>
          <Button onClick={handleSubmit}>Submit</Button>
        </Col>
        <Col lg={1}>
          <Button onClick={() => setVal("Sorry for cancellation")}>
            Cancel
          </Button>
        </Col>
        <p>{val}</p>
        <Col lg={2}></Col>
      </Row>
    </Form>
  );
};
