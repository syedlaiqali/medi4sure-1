import React from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HeaderForComp } from "../Common/HeaderForComp";

export const MediUpdates = () => {
  return (
    <React.Fragment>
      <HeaderForComp title="Medicare Updates" />
      <Link to="/feedback">Click here to share your feedback</Link>
      <Carousel variant="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="img/updates/1.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="img/updates/2.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="img/updates/3.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5>Third slide label</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </React.Fragment>
  );
};
