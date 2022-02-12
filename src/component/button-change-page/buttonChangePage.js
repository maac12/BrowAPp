import React from "react";
import "./buttonChangePage.css";

import { DownOutlined } from "@ant-design/icons/lib/icons";
import { Button, Row, Col } from "react-bootstrap";
import changePage from "../../actions/index";
import { connect } from "react-redux";

const ButtonChangePage = (props) => {
  const __changePage = () => props.dispatch(changePage());

  return (
    <Row>
      <Col md={1} xs={1}></Col>
      <Col md={4} xs={4}>
        <Button
        variant="outline-dark"
         className="buttonChangePage animate__animated animate__bounce animate__repeat-2"
          size="lg"
          onClick={__changePage}
        >
          <DownOutlined />
        </Button>
      </Col>
    </Row>
  );
};

export default connect()(ButtonChangePage);
