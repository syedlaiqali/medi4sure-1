import { Row, Col, Form, Button } from "react-bootstrap";
import "./Feedback.css";

export const Feedback = () => {
  return (
    <Form>
      <Form.Control
        placeholder="Enter the Title..."
        className="fbrow"
      ></Form.Control>
      <Form.Control
        as="textarea"
        placeholder="Enter Feedback here..."
        className="fbrow"
      ></Form.Control>
      <Row className="fbrow">
        <Col lg={8}></Col>
        <Col lg={1}>
          <Button>Submit</Button>
        </Col>
        <Col lg={1}>
          <Button>Cancel</Button>
        </Col>
        <Col lg={2}></Col>
      </Row>
    </Form>
  );
};
