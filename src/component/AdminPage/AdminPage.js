import React from "react";
import { Container } from "react-bootstrap";
import { connect } from "react-redux";

import HeadAdmin from "./head";
import WindowOFOrders from "./windowOfOrders";





const AdminPage = () => {

    return (
      <Container>
        <HeadAdmin/>
         <WindowOFOrders/>
      </Container>
    );
}

const mapStateToProps = ({currentPage}) => {
  return  {currentPage};
};

export default connect(mapStateToProps)(AdminPage);
