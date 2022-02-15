import React, { useState, useRef } from "react";
import { Button, Row, Col, Modal, Form } from "react-bootstrap";
import "./info.css";
import { connect } from "react-redux";

import { setPage } from "../../actions/index";
import ButtonChangePage from "../button-change-page/buttonChangePage";

const Info = (props) => {
  const [modalShow, setModalShow] = useState(false);
  const name = useRef(null);
  const phoneNumber = useRef(null);
  const remind = useRef(null);
  

  

  const __setPage = (namePage) => props.dispatch(setPage(namePage));

  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Записаться Online
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Ваше имя</Form.Label>
              <Form.Control type="text" placeholder="Введите ваше имя" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Номер телефона</Form.Label>
              <Form.Control type="number" placeholder="Ваш номер телефона" />
              <Form.Text className="text-muted">
                Мы никому и никогда не передадим ваши личные данные!
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Время и Дата</Form.Label>
              <Form.Control type="date" />
            </Form.Group>
            <Form.Check
              type="switch"
              id="custom-switch"
              label="Напомнить за сутки до записи"
            />

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Комментарий</Form.Label>
              <Form.Control
                type="sumbit"
                as="textarea"
                rows={3}
              />
            </Form.Group>
            <Button type="submit" variant="success">
              Отправить
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }

  return (
    <div className="text-center">
      <img
        className="imageBackground"
        alt="netu kartinki"
        src="https://media.timeout.com/images/102210875/image.jpg"
      ></img>
      <Row>
        <Col md="6 info animate__animated animate__fadeInUpBig">
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
            onClick={() => __setPage("Price")}
            className="animate__animated animate__fadeInUpBig buttonUnderInfo"
            variant="dark"
            size="lg"
          >
            СПИСОК УСЛУГ
          </Button>
          <Button
            className="giveSertficat animate__animated animate__fadeInUpBig buttonUnderInfo"
            variant="dark"
            size="lg"
            onClick={() => setModalShow(true)}
          >
            ЗАПИСАТЬСЯ ОНЛАЙН
          </Button>
          <ButtonChangePage />
        </Col>
        <Col md="4"></Col>

        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </Row>
    </div>
  );
};

export default connect()(Info);
