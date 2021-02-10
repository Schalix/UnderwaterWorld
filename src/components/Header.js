import React from "react";
import "./style.css";
import { Nav, Navbar } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

//Burger Menu & Nav, source: https://codesandbox.io/s/react-bootstrap-hamburger-menu-example-forked-k4ekb?file=/src/logo.svg
export default function Header() {
  return (
    <Navbar collapseOnSelect expand={false} bg="dark" variant="dark">
      <Navbar.Brand href="#home">
        {/* <Logo
          alt=""
          width="30"
          height="30"
          className="d-inline-block align-top"
        /> */}
        Marine Species
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="Species">Species</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="/Register">Register</Nav.Link>
          <Nav.Link href="/LogInPage">Log-in</Nav.Link>
          <Nav.Link eventKey={2} href="Chat">
            Chat
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}