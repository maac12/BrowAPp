import React, { Component } from "react";
import { Container } from "react-bootstrap";
import "animate.css";
import "./app.css";
import { connect } from "react-redux";

import Header from "../Header/header.js";
import Info from "../Info/info.js";
import AboutMe from "../about-me/AboutMe";

class App extends Component {
  render() {
    var mainWindow = "info";
    const { currentPage } = this.props;

    if (currentPage === "info") {
      mainWindow = <Info />;
    }

    if (currentPage === "aboutMe") {
      mainWindow = <AboutMe />;
    }

    return (
      <Container>
        <Header />
        {mainWindow}
      </Container>
    );
  }
}

const mapStateToProps = ({currentPage}) => {
  return  {currentPage};
};

export default connect(mapStateToProps)(App);
