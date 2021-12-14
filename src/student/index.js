import React from "react";
import { Col, Row } from "reactstrap";
import SideNav from "../side/SideNav";

const StudentPart = () => {
  return (
    <div>
      <Row>
          <Col md={3}>
              <SideNav/>
          </Col>
          <Col md={9}>
          </Col>
      </Row>
    </div>
  );
};

export default StudentPart;
