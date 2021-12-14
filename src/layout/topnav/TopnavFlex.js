import React from "react";
import {
  Navbar,
  Nav,
  NavbarBrand,
  Collapse,
  NavbarToggler,
  NavItem,
  NavLink,
} from "reactstrap";
import logo from "../../assets/img/logo.png";
import "./nav.css";

function TopnavFlex() {
  return (
    <div>
      <Navbar
        color=""
        style={{ backgroundColor: "#0A0E43" }}
        st
        expand="md"
        dark
      >
        <NavbarBrand href="/">
          <img src={logo} className="logo" alt="Logo" />
        </NavbarBrand>
        <NavbarToggler onClick={function noRefCheck() {}} />
        <Collapse navbar>
          <Nav className="me-auto" navbar>
            <h1 className="text-white text-center">School Management System</h1>
          </Nav>
          <NavItem>
            <NavLink href="login" className="btn btn-light">
              Login
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="login" className="btn btn-light ">
              Sign-up
            </NavLink>
          </NavItem>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default TopnavFlex;
