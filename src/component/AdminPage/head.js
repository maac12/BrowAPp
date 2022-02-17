import React, {useEffect} from "react";
import { Navbar, Container, Button } from "react-bootstrap";

import logo from "../../images/admin.png";
import { logout } from "../../firebase/firebase";


const HeadAdmin = () => {
 

  const clickLogOut = () => { 
    logout();
    window.location.reload();
  }

    return (
        <Navbar bg="dark">
        <Container>
          <Navbar.Brand>
            <img
              src={logo}
              width="40"
              height="40"
              className="d-inline-block align-top"
              alt="admin Logo"
            />
          </Navbar.Brand>
         <Button type="submit" variant="outline-light" onClick={clickLogOut}>Выйти</Button>
        </Container>
        </Navbar>

    );
}

export default HeadAdmin;