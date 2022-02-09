import React from "react";
import { Button, Row, Col } from "react-bootstrap";
import './info.css';



const Info = () => {
  return (
    <div className="text-center info">
      <Row>
        <Col md="6">
          <h1>GULDARIA BROW BAR</h1>
          <p>Премиум салон бровей в центре Уфы</p>
          <p>+7 927 777 77 77</p>
          <p>-Уфа, ул. Центровая, 7. к7</p>
        </Col>
      </Row>
      <Row className="d-flex">
        <Col md="6" xs="6">
          <Button  variant="outline-dark"  size="lg">
            СПИСОК УСЛУГ
          </Button>
          <Button className="giveSertficat" variant="outline-dark" size="lg">
            ПОДАРИТЬ СЕРТИФИКАТ
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default Info;
