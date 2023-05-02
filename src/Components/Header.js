import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "../App.css";

let Header = () => {
  return (
    <Navbar expand="lg" variant="light" bg="light">
      <Container>
        <Navbar.Brand id="brand" href="#">
          K ACCURATE ELECTRICAL
          <p id="p1">(PTY) LTD</p>
        </Navbar.Brand>
      </Container>
      <Container id="links">
        <Nav.Link className="navLink" href="#about">
          About Us
        </Nav.Link>
        <Nav.Link className="navLink" href="#team">
          Our Team
        </Nav.Link>
        <Nav.Link className="navLink" href="#service">
          Services
        </Nav.Link>
        <Nav.Link className="navLink" href="#refs">
          Portfolio
        </Nav.Link>
        <Nav.Link className="navLink" href="#cert">
          Compliance & Certification
        </Nav.Link>
        <Nav.Link className="navLink" href="#foot">
          Contact Us
        </Nav.Link>
      </Container>
    </Navbar>
  );
};

export default Header;
