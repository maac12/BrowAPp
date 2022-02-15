import React, { Component } from "react";
import { Container } from "react-bootstrap";
import "animate.css";
import "./app.css";
import { connect } from "react-redux";

import Header from "../header/header.js";
import Info from "../info/info.js";
import AboutMe from "../about-me/AboutMe";
import PopularQuestions from "../popular-questions/popular-questions"
import Footer from "../footer/Footer";
import Price from "../price/price"



class App extends Component {
  render() {


    var mainWindow = "Info";
    
    const { currentPage } = this.props;
  
    if (currentPage === "Info") {
      mainWindow = <Info />;
    }

    if (currentPage === "AboutMe") {
      mainWindow = <AboutMe />;
    }

    if(currentPage === "PopularQuestions"){
      mainWindow = <PopularQuestions/>;
    }

    
    if(currentPage === "Price"){
      mainWindow = <Price/>;
    }

    return (
      <Container>
        <Header />
        {mainWindow}
       <Footer/>
      </Container>
    );
  }
}

const mapStateToProps = ({currentPage}) => {
  return  {currentPage};
};

export default connect(mapStateToProps)(App);
