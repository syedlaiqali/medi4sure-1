import React, { useState } from "react";
import { Row, Col, InputGroup, FormControl, Button } from "react-bootstrap";

export const LoanItem = (props) => {
  const [p, setP] = useState(0);
  const [n, setN] = useState(0);
  const [r, setR] = useState(0);

  const handleCalcEMI = () => {};
  return (
    <div>
      <Row>
        <Col lg={3}>{props.type} Loan Amount</Col>
        <Col lg={9}>
          <InputGroup className="mb-3">
            <InputGroup.Text>₹</InputGroup.Text>
            <FormControl
              type="number"
              min="100000"
              max="500000"
              aria-label="Amount (to the nearest dollar)"
              onChange={(e) => setP(e.target.value)}
            />
          </InputGroup>
        </Col>
      </Row>
      <Row>
        <Col lg={3}>Interest Rate</Col>
        <Col lg={9}>
          <InputGroup className="mb-3">
            <FormControl
              aria-label="Interest Rate"
              onChange={(e) => setR(e.target.value)}
            />
            <InputGroup.Text>%</InputGroup.Text>
          </InputGroup>
        </Col>
      </Row>
      <Row>
        <Col lg={3}>Loan Tenure</Col>
        <Col lg={9}>
          <InputGroup className="mb-3">
            <FormControl
              aria-label="Loan Tenure"
              onChange={(e) => setN(e.target.value)}
            />
            <InputGroup.Text>Yrs</InputGroup.Text>
          </InputGroup>
        </Col>
      </Row>
      <Row>
        <Col lg={6}>Pocessing Fees: {(p * 2) / 100}</Col>
        <Col lg={6}>
          EMI: {Math.ceil((Number(p) + Number((p * n * r) / 100)) / (n * 12))}
        </Col>
      </Row>
    </div>
  );
};
