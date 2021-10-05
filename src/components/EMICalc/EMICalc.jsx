import React from "react";
import { Tabs, Tab } from "react-bootstrap";
import { LoanItem } from "../EMICalc/LoanItem";
import { HeaderForComp } from "../Common/HeaderForComp";

export const EMICalc = () => {
  console.log("Hey I am in EMICalc");
  return (
    <React.Fragment>
      <HeaderForComp title="EMI Calculator" />
      <Tabs
        defaultActiveKey="homeloan"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="homeloan" title="Home Loan">
          <LoanItem type="Home" />
        </Tab>
        <Tab eventKey="personalloan" title="Personal Loan">
          <LoanItem type="Personal" />
        </Tab>
        <Tab eventKey="carloan" title="Car Loan">
          <LoanItem type="Car" />
        </Tab>
      </Tabs>
    </React.Fragment>
  );
};
