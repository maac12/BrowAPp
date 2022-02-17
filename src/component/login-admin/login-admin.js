import React, { useRef, useState } from "react";
import { Row, Col, Stack, Form, Button } from "react-bootstrap";
import "./login-admin.css";

import { login, logout, useAuth } from "../../firebase/firebase";


const LoginAdmine = () => {

  const [loading, setLoading] = useState(false);
  const currentUser = useAuth();

  const name = useRef("null");
  const password = useRef("null");

  async function handleLogin() {
    setLoading(true);
    try {
      await login(name.current.value, password.current.value);
    } catch {
      alert("Неправильный пароль или Логин");
    }
    setLoading(false);
  }

 async function handleLogOut () {
   setLoading(true);
   try {
     await logout();
   } catch {
     alert("Ошибка выхода из профиля")
   }
 }

  return (
    <Row>
      <Col md={4} xs={1}></Col>
      <Col md={4} xs={10}>
        <Stack
          direction="vertical"
          gap={10}
          className="login d-flex align-items-center"
        >
          <Form>
            <Form.Group className="mb-3 text-center" controlId="formBasicEmail">
              <Form.Label>Admin Email</Form.Label>
              <Form.Control
                ref={name}
                type="email"
                placeholder="Enter admin login"
              />
            </Form.Group>

            <Form.Group
              className="mb-3 text-center"
              controlId="formBasicPassword"
            >
              <Form.Label>Password</Form.Label>
              <Form.Control
                ref={password}
                type="password"
                placeholder="Password"
              />
            </Form.Group>

            <div className="text-center">
              <Button
                disabled={loading}
                variant="outline-dark"
                type="submit"
                onClick={handleLogin}
              >
                Войти
              </Button>
            </div>
            <div>Currently logged in as: { currentUser?.email } </div>
          </Form>
        </Stack>
      </Col>
      <Col md={4} xs={1}></Col>
    </Row>
  );
};

export default LoginAdmine;
