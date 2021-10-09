import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { configStore } from "./state/store/configStore";
import { Row, Col } from "react-bootstrap";
import { Home } from "./components/Home/Home";
import { EMICalc } from "./components/EMICalc/EMICalc";
import { Feedback } from "./components/Feedback/Feedback";
import { ProductList } from "./components/Products/ProductList";
import { ProductDetails } from "./components/Products/ProductDetails";
import { NavBar } from "./components/Common/NavBar";
import { Cart } from "./components/Products/Cart";
import "./App.css";

export const App = () => {
  const localStore = configStore();
  return (
    <React.Fragment>
      <Provider store={localStore}>
        <Router>
          <Row>
            <Col lg={10}>
              <NavBar />
            </Col>
            <Col lg={2}>
              <Cart />
            </Col>
          </Row>
          <Switch>
            <Route path="/emicalc">
              <EMICalc />
            </Route>
            <Route path="/feedback">
              <Feedback />
            </Route>
            <Route path="/products" exact>
              <ProductList />
            </Route>
            <Route path="/productdetails">
              <ProductDetails />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </Provider>
    </React.Fragment>
  );
};
