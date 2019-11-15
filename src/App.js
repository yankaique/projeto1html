import React, { Component, Fragment } from 'react';
import './App.css';
import { Navbar, NavDropdown, Nav,Carousel } from 'react-bootstrap';

import logo from './assets/graduation.svg';
import imagem from './banner1.png'

function App() {
  return (
    <>

      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Navbar.Brand href="#home">
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
            <Nav.Link className="menu-text" href="#features">Galeria</Nav.Link>
            <Nav.Link className="menu-text" href="#pricing">Atividades</Nav.Link>
            <NavDropdown className="menu-text" title="Conheça a escola" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Perguntas e Respostas</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Fale Conosco</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Saiba mais</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
{/*================================================================================================================*/}
{/*================================================================================================================*/}
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={imagem}
            alt="First slide"
            width="100%"
            height="500"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={imagem}
            alt="Third slide"
            width="100%"
            height="500"
          />

          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={imagem}
            alt="Third slide"
            width="100%"
            height="500"
          />
        </Carousel.Item>
      </Carousel>
{/*================================================================================================================*/}
{/*================================================================================================================*/}
    <div className="meio">
      <h1>
        Olá Mundo
      </h1>
    </div>



    </>






  );
}

export default App;
