import React from "react";
import logo from '../../assets/For Web/svg/Color logo - no background.svg';
// import {ReactNavbar} from "react-responsive-animate-navbar";
import { library } from "@fortawesome/fontawesome-svg-core";
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);


require('./navabr.scss');

function NavBar() {
  return (
    <Navbar fixed="top" className='justify-content-between'>
      <Navbar.Brand href="/">
        <img
          alt=""
          src={logo}
          width="300"
          height="150"
          className="d-inline-block align-top"
        />
      </Navbar.Brand>
      {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
      <Navbar id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Accueil</Nav.Link>
          <Nav.Link href="">Contact</Nav.Link>
          <Nav.Link href="">Devis sur mesure</Nav.Link>
          {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown> */}
        </Nav>
      </Navbar>
    </Navbar>
  )
}

export default NavBar
