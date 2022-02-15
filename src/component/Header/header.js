import React, { useRef, useState } from "react";
import {
  Button,
  Figure,
  Row,
  Col,
  Offcanvas,
  Modal,
  Form,
  Table,
} from "react-bootstrap";
import "./header.css";
import { connect } from "react-redux";
import { setPage } from "../../actions/index";

import Logo from "../../images/logo.png";

const Header = (props) => {
  //Состояния
  const [show, setShow] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [arrowFeedback, setArrowFeedback] = useState([]);
  const [tableVisible, setTableVisible] = useState(false);

  //Значения инпута отзыва
  const feedbackInput = useRef(null);

  //Модальное окно меню
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //Установка страницы
  const __setPage = (namePage) => props.dispatch(setPage(namePage));

  function MyVerticallyCenteredModal(props) {
    

    //Добавитть отзыв
    const addFeedback = (value) => {

      setArrowFeedback([...arrowFeedback, value]);
      feedbackInput.current.value = "";
      setTableVisible(true);
    };

    //Время
    var now = new Date().toLocaleString(); // 11:02:48

    //Переменная для счета в списке отзывов
    let numberString = 1;

    //Рисуем Историю отзывов
    const feedBackList = arrowFeedback.map((item) => {
        return (
          <tr key={numberString++}>
            <td>{numberString}</td>
            <td>{now}</td>
            <td>{item}</td>
          </tr>
        );
      });
    

    //Модальное окно отзыва
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Оставьте отзыв ниже, он очень важен для нас!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control
                type="sumbit"
                ref={feedbackInput}
                as="textarea"
                rows={3}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="dark"
            size="md"
            className="buttoFeedback"
            onClick={() => addFeedback(feedbackInput.current.value)}
          >
            Отправить
          </Button>
        </Modal.Footer>
{ tableVisible ? (
        <Row>
          <Col md={12} className="justify-content-center">
          <h3 className="text-center">Ваш отзыв!</h3>
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Время</th>
                  <th>Отзыв</th>
                </tr>
              </thead>
              <tbody>
               {feedBackList}
               </tbody>
            </Table>
          </Col>
        </Row>) :( null) }
      </Modal>
    );
  }

  //Сам Хэдер

  return (
    <div className="header animate__animated animate__fadeInDown">
      <Row>
        <Col md="4" xs="2" className="d-flex justify-content-start">
          <Button
            className="menuButton"
            onClick={handleShow}
            variant="dark"
            size="md"
          >
            МЕНЮ
          </Button>
          <Offcanvas className="menu" show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title className="menuModalName">Меню</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <ul className="listMenu">
                <li>
                  <a onClick={() => __setPage("Info")}>ГЛАВНАЯ</a>
                </li>
                <li>
                  <a onClick={() => __setPage("Price")}>УСЛУГИ</a>
                </li>
                <li>
                  <a onClick={() => __setPage("PopularQuestions")}>
                    ПОПУЛЯРНЫЕ ВОПРОСЫ
                  </a>
                </li>
                <li>
                  <a onClick={() => __setPage("AboutMe")}>О НАС</a>
                </li>
                <li>
                  <a href="#">КОНТАКТЫ</a>
                </li>
              </ul>

              <div className="menuContact text-center">
                {" "}
                <p>+7 (916) 777 77 77</p>
                <p>Уфа, ул. Центровая, 7-7с1,1</p>
              </div>
            </Offcanvas.Body>
          </Offcanvas>
        </Col>

        <Col md="4" xs="5">
          <Figure className="d-flex justify-content-center">
            <Figure.Image width={150} height={150} alt="171x180" src={Logo} />
          </Figure>
        </Col>
        <Col md="4" xs="5 " className="d-flex justify-content-end">
          <Button
            variant="dark"
            size="md"
            className="buttoFeedback"
            onClick={() => setModalShow(true)}
          >
            ОСТАВИТЬ ОТЗЫВ
          </Button>
        </Col>
      </Row>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
};

export default connect()(Header);
