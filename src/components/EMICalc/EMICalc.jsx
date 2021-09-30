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
        <LoanItem />
      </Tab>
      <Tab eventKey="personalloan" title="Personal Loan">
        <p>Tab2</p>
      </Tab>
      <Tab eventKey="carloan" title="Car Loan">
        <p>Tab3</p>
      </Tab>
    </Tabs>
  );
};
