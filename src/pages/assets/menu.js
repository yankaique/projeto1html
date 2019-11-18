import React from 'react';
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';

import logo from '../images/graduation.svg';

function Menu() {
    return(
        <Navbar bg="light" variant="light" collapseOnSelect expand="lg" >
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
            <Nav.Link className="menu-text" href="/atividades">Atividades</Nav.Link>
            <NavDropdown className="menu-text" title="Conheça a escola" id="collasible-nav-dropdown">
              <NavDropdown.Item className="menu-text" href="/faq">Perguntas e Respostas</NavDropdown.Item>
              <NavDropdown.Item className="menu-text" href="/formulario">Fale Conosco</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className="menu-text" href="/conhecer">Saiba mais</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
}


export default Menu;

