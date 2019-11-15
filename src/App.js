import React, { Component, Fragment } from 'react';
import './App.css';
import { Navbar, NavDropdown, Nav, Carousel, Card, Row,Image } from 'react-bootstrap';

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
      <div>
        <Image src={imagem} alt="Seja bem-vindo" style={{width:"100%"}} fluid/>
      </div>
      {/*================================================================================================================*/}
      {/*================================================================================================================*/}
      <div className="meio">
        <Row>
          <Card style={{ width: '18rem',margin:'0 auto',marginTop:'10%' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Segurança</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
    </Card.Text>

            </Card.Body>
          </Card>
          {/*================================================================================================================*/}
          {/*================================================================================================================*/}
          <Card style={{ width: '18rem',margin:'0 auto',marginTop:'10%' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Saúde</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
    </Card.Text>

            </Card.Body>
          </Card>
          {/*================================================================================================================*/}
          {/*================================================================================================================*/}
          <Card style={{ width: '18rem',margin:'0 auto',marginTop:'10%' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>ajuda</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
    </Card.Text>

            </Card.Body>
          </Card>
        </Row>

      </div>
      {/*================================================================================================================*/}
      {/*================================================================================================================*/}
      <div>
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
      </div>
      {/*================================================================================================================*/}
      {/*================================================================================================================*/}
      <footer className="rodape">
        <div>

        </div>
      </footer>
    </>






  );
}

export default App;
