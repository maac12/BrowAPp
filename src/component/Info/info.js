import React from "react";
import { Button, Row, Col } from "react-bootstrap";
import "./info.css";
import ButtonChangePage from "../button-change-page/buttonChangePage";

const Info = () => {
  return (
    <div className="text-center">
      <img
        className="imageBackground"
        alt="netu kartinki"
        src="https://media.timeout.com/images/102210875/image.jpg"
      ></img>
      <Row>
        <Col md="6 info animate__animated animate__fadeInDown">
          <h1>GULDARIA BROW BAR</h1>
          <p>Премиум салон бровей в центре Уфы</p>
          <p>+7 927 777 77 77</p>
          <p>Уфа, ул. Центровая, 7. к7</p>
        </Col>
        <Col md="6"></Col>
      </Row>
      <Row className="d-flex buttonInfoList">
        <Col md="6" xs="12">
          <Button
            className="animate__animated animate__fadeInDown"
            variant="dark"
            size="lg"
          >
            СПИСОК УСЛУГ
          </Button>
          <Button
            className="giveSertficat animate__animated animate__fadeInDown"
            variant="dark"
            size="lg"
          >
            ЗАПИСАТЬСЯ ОНЛАЙН
          </Button>
          <ButtonChangePage />
        </Col>
        <Col md="4"></Col>
      </Row>
    </div>
  );
};

export default Info;
