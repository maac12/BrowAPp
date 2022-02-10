import React from "react";
import { Container } from "react-bootstrap";
import 'animate.css';

import Header from "../Header/header.js";
import Info from "../Info/info.js";
import './app.css';


const App = () => {
     
    return (
        <Container>
        <Header/>, <Info/>
        </Container>
    );

};

export default App;
