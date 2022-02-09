import React from "react";
import { Button, Figure, Row, Col } from "react-bootstrap";
import './header.css';
import Logo from "../../images/logo.png"

const Header = () => {
  return (
    <div className="header">
      <Row>
        <Col md="4" xs="4">
          <Button variant="outline-dark" size="md">
            MENU
          </Button>
        </Col>

        <Col md="4" xs="4">
          <Figure>
            <Figure.Image
              width={250}
              height={250}
              alt="171x180"
              src= {Logo}
            />
          </Figure>
        </Col>
        <Col md="4" xs = "4">
          <Button variant="outline-dark" size="md">
            ОСТАВИТЬ ОТЗЫВ
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default Header;
