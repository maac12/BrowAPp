import React from "react";
import "./price.css";

import ButtonChangePage from "../button-change-page/buttonChangePage";
import { Row, Col, Table } from "react-bootstrap";

const Price = () => {
  return (
    <Row>
      <Col md={12} xs={12} className = "animate__animated animate__fadeInUpBig">
        <h2 className="text-center priceHead">УСЛУГИ</h2>
        <Table striped bordered hover size="sm">
          <tbody className="tableBody">
            <tr>
              <td>Коррекция + окрашивание бровей краской</td>
              <td>45 минут</td>
              <td>1500 руб.</td>
            </tr>
            <tr>
              <td>Коррекция бровей (пинцет/нить/сахар/воск)</td>
              <td>30 мин.</td>
              <td>850 руб.</td>
            </tr>
            <tr>
              <td>Мужская коррекция бровей</td>
              <td>30 мин.</td>
              <td>900 руб.</td>
            </tr>
            <tr>
              <td>Окрашивание бровей краской</td>
              <td>45 мин.</td>
              <td>1500 руб.</td>
            </tr>
            <tr>
              <td>Коррекция+окрашивание бровей хной</td>
              <td>30 мин.</td>
              <td>650 руб.</td>
            </tr>
          </tbody>
        </Table>
        <ButtonChangePage/>
      </Col>
    </Row>
  );
};

export default Price;
