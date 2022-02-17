import React, { useState, useRef } from "react";
import { Button, Row, Col, Modal, Form } from "react-bootstrap";
import "./info.css";
import { connect } from "react-redux";

import { setPage, addOrder } from "../../actions/index";
import ButtonChangePage from "../button-change-page/buttonChangePage";

const Info = (props) => {
  const [modalShow, setModalShow] = useState(false);
  const [appointments, setAppointments] = useState([]);
  const [isFormSent, setIsFormSent] = useState(false);

  //Redux
  const __setPage = (namePage) => props.dispatch(setPage(namePage));
  const __addOrder = (order) => props.dispatch(addOrder(order));

 
  //Sumbit ref
  const name = useRef(null);
  const phoneNumber = useRef(null);
  const remind = useRef(null);
  const date = useRef(null);
  const comment = useRef(null);

  const submitOnlineBook = () => {
    const remindTransform = remind.current.value === "on" ? "+" : "-";

    const appointment = {
      name: name.current.value,
      phoneNumber: phoneNumber.current.value,
      remind: remindTransform,
      date: date.current.value,
      comment: comment.current.value,
    };

    console.log(appointment);

    setAppointments([...appointments, appointment]);
    setIsFormSent(true);
    __addOrder(appointment);
  };


  //Button Записаться онлайн 
  const startOnlineBooking = () => {
    setModalShow(true);
    setIsFormSent(false);
  }
 

  function MyVerticallyCenteredModal(props) {
    return (
      <> { !isFormSent ?
       ( <Modal
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
                <Form.Control
                  ref={name}
                  type="text"
                  placeholder="Введите ваше имя"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Номер телефона</Form.Label>
                <Form.Control
                  ref={phoneNumber}
                  type="text"
                  placeholder="Ваш номер телефона"
                />
                <Form.Text className="text-muted">
                  Мы никому и никогда не передадим ваши личные данные!
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Время и Дата</Form.Label>
                <Form.Control ref={date} type="datetime-local" />
              </Form.Group>
              <Form.Check
                ref={remind}
                type="switch"
                id="custom-switch"
                label="Напомнить за сутки до записи"
              />

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Комментарий</Form.Label>
                <Form.Control ref={comment} as="textarea" rows={3} />
              </Form.Group>
              <Button  variant="success" onClick={submitOnlineBook}>
                Отправить
              </Button>
            </Form>
          </Modal.Body>
        </Modal>) : 
      
        (<Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
          </Modal.Header>
          <Modal.Body>
            <h2 className="text-center">Форма успешно отправлена!</h2>       
          </Modal.Body>
          <Modal.Footer className="d-flex justify-content-center">
            <Button  variant="outline-dark"  onClick={props.onHide}>Закрыть</Button>
          </Modal.Footer>
        </Modal>) }
      </>
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
            onClick={startOnlineBooking}
            
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
