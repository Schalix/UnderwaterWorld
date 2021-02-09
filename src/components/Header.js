import React from "react";
import "./style.css";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
// import { ReactComponent as Logo } from "./logo.svg";

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
          {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Species</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown> */}
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



// import Nav from 'react-bootstrap/Nav'
// import { slide as Menu } from 'react-burger-menu'
// const Header = () => {
// const  showSettings = (event)=> {
//     event.preventDefault();
//   }

//     return (
//         <Nav variant="pills" defaultActiveKey="/home">
//             <Nav.Item>
//                     <Menu right width= {80} >
//         <a id="home" className="menu-item" href="/">Home</a>
//         <a id="about" className="menu-item" href="/about">Fish</a>
//         <a id="contact" className="menu-item" href="/contact">log-in</a>
//         <a onClick={ showSettings } className="menu-item--small" href="">Chat</a>
//       </Menu>
//             </Nav.Item>
//             <Nav.Item>
//                 <Nav.Link href="/home">Home</Nav.Link>
//             </Nav.Item>
//             <Nav.Item>
//                 <Nav.Link eventKey="link-1">Fish</Nav.Link>
//             </Nav.Item>
//             <Nav.Item>
//                 <Nav.Link eventKey="disabled" disabled>
//                 Chat
//                 </Nav.Link>
//             </Nav.Item>
//             <Nav.Item>
//                 <Nav.Link eventKey="disabled" disabled>
//                 Log In
//                 </Nav.Link>
//             </Nav.Item>
//         </Nav>
//     )
// }


// export default Header