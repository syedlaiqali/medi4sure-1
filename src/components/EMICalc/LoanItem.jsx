import { Row, Col, InputGroup, FormControl } from "react-bootstrap";

export const LoanItem = (props) => {
  return (
    <div>
      <Row>
        <Col lg={3}>{props.type} Loan Amount</Col>
        <Col lg={9}>
          <InputGroup className="mb-3">
            <InputGroup.Text>₹</InputGroup.Text>
            <FormControl aria-label="Amount (to the nearest dollar)" />
          </InputGroup>
        </Col>
      </Row>
      <Row>
        <Col lg={3}>Interest Rate</Col>
        <Col lg={9}>
          <InputGroup className="mb-3">
            <FormControl aria-label="Interest Rate" />
            <InputGroup.Text>%</InputGroup.Text>
          </InputGroup>
        </Col>
      </Row>
      <Row>
        <Col lg={3}>Loan Tenure</Col>
        <Col lg={9}>
          <InputGroup className="mb-3">
            <FormControl aria-label="Loan Tenure" />
            <InputGroup.Text>Yrs</InputGroup.Text>
          </InputGroup>
        </Col>
      </Row>
    </div>
  );
};
