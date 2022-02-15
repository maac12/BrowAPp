import React from "react";
import "./Fotter.css";
import { Row, Col } from "react-bootstrap";
import { InstagramOutlined, FacebookOutlined,DingtalkOutlined ,AppleOutlined } from "@ant-design/icons/lib/icons";
import { Navbar, Container, Nav } from "react-bootstrap";

const Fotter = () => {
  return (
    <Row>
      <Col md={12} xs={12}>
        <Navbar bg="dark" variant="dark" fixed="bottom" >
          <Container>
            <Navbar.Brand href="#home">
            <DingtalkOutlined  style={{ fontSize: '35px'}}/>
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home"><FacebookOutlined style={{ fontSize: '22px'}} /></Nav.Link>
              <Nav.Link href="#features"><InstagramOutlined style={{ fontSize: '22px'}} /></Nav.Link>
              <Nav.Link href="#pricing"><AppleOutlined style={{ fontSize: '22px'}} /></Nav.Link>
            </Nav>
            <Col md={3}><img src="https://www.tadviser.ru/images/thumb/8/83/Apple-app-store.jpg/840px-Apple-app-store.jpg" className="imgApple"></img></Col>
            
          </Container>
        </Navbar>
      </Col>
    </Row>
  );
};

export default Fotter;
