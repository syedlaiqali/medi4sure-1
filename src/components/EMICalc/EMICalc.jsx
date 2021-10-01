import { Tabs, Tab } from "react-bootstrap";
import { LoanItem } from "../EMICalc/LoanItem";

export const EMICalc = () => {
  return (
    <Tabs
      defaultActiveKey="profile"
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
  );
};
