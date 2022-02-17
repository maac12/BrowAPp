import React from "react";
import { Row, Col, Table } from "react-bootstrap";
import { connect } from "react-redux";

import "./windowOfOrders.css";

const WindowOFOrders = ({ orders }) => {
  const ordersList = orders.map((item) => {
    return (
      <tr>
        <th>1</th>
        <th>{item.date}</th>
        <th>{item.remind}</th>
        <th>{item.name}</th>
        <th>{item.phoneNumber}</th>
        <th>{item.comment}</th>
      </tr>
    );
  });

  return (
    <Row>
      <Col md={12} className="windowOFOrders">
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Дата и время</th>
              <th>Нап</th>
              <th>Имя</th>
              <th>Телефон</th>
              <th>Коментарий</th>
            </tr>
          </thead>
          <tbody>{ordersList}</tbody>
        </Table>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ orders }) => {
  return { orders };
};

export default connect(mapStateToProps)(WindowOFOrders);
