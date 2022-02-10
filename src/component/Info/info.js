import React from "react";
import { Button, Row, Col } from "react-bootstrap";
import './info.css';



const Info = () => {
  return (
    <div className="text-center">
      <Row>
        <Col md="6 info animate__animated animate__fadeInLeft">
        
         <h1 className="animate__animated animate__pulse">GULDARIA BROW BAR</h1>
          <p>Премиум салон бровей в центре Уфы</p>
          <p>+7 927 777 77 77</p>
          <p>-Уфа, ул. Центровая, 7. к7</p>
        
        </Col>
        <Col md="6"></Col>
      </Row>
      <Row className="d-flex">
        <Col md="6" xs="12">
          <Button  className="animate__animated animate__fadeInUp"  variant="dark"  size="lg">
            СПИСОК УСЛУГ
          </Button>
          <Button className="giveSertficat animate__animated animate__fadeInUp" variant="dark" size="lg">
            ЗАПИСАТЬСЯ ОНЛАЙН
          </Button>
        </Col>
        <Col md="4"></Col>
      </Row>
    </div>
  );
};

export default Info;
