import React from "react";
import { Row, Col } from "react-bootstrap";
import "./Aboutme.css";
import ButtonChangePage from "../button-change-page/buttonChangePage"

const AboutMe = () => {
  return (
    <Row>
      <Col md={4} className="animate__animated animate__fadeInUpBig">
        <h2>Брови</h2>
        <p>
          Брови - это наша профессия, увлечение и любовь. Приходите к нам за
          красивыми бровями и хорошим настроением
        </p>
        <ButtonChangePage/>
      </Col>
      <Col md={8} className="animate__animated animate__fadeInUpBig">
        <img
          src="https://ameliebrowbar.ru/design/default/images/slide-brovi-girl.png"
          className="photo"
          alt="фото не доступно"
        ></img>
      </Col>
    </Row>
  );
};

export default AboutMe;
