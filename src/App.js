import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { EMICalc } from "./components/EMICalc/EMICalc";
import { Feedback } from "./components/Feedback/Feedback";
import "./App.css";
import React from "react";

export const App = () => {
  return (
    <React.Fragment>
      <Router>
        <Link to="/" className="navlink">
          Back To Home
        </Link>
        <Link to="/emicalc" className="navlink">
          EMI Caculator
        </Link>
        <Link to="/feedback" className="navlink">
          Feedback
        </Link>
        <Switch>
          <Route path="/emicalc">
            <EMICalc />
          </Route>
          <Route path="/feedback">
            <Feedback />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
};
