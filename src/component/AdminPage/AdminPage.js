import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { connect } from "react-redux";





class AdminPage extends Component {
  render() {


    return (
      <Container>
         <h2>ADMIN PAGE</h2>
      </Container>
    );
  }
}

const mapStateToProps = ({currentPage}) => {
  return  {currentPage};
};

export default connect(mapStateToProps)(AdminPage);
