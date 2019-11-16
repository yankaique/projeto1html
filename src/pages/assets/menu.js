import React from 'react';
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';

import logo from '../../assets/graduation.svg';

function Menu() {
    return(
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Navbar.Brand href="/">
          <div className="logo-background">
            <img
              src={logo}
              width="60"
              height="60"
              className="d-inline-block align-top icon-top"
              alt="React Bootstrap logo"
            />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link className="menu-text" href="/galeria">Galeria</Nav.Link>
            <Nav.Link className="menu-text" href="/ativdades">Atividades</Nav.Link>
            <NavDropdown className="menu-text" title="Conheça a escola" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Perguntas e Respostas</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Fale Conosco</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Saiba mais</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
}


export default Menu;

