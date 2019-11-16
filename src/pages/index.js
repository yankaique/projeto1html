import React from 'react';
import '../App.css';

import { Card, Row, Image } from 'react-bootstrap';

import Menu from './assets/menu';
import Footer from './assets/footer';

import imagem from '../banner1.png';
import iconApple from '../assets/apple.svg';
import iconCam from '../assets/webcam.svg';
import iconHelp from '../assets/teacher.svg';

function Home() {
  return (
    <>
      <Menu />
      
      {/*================================================================================================================*/}
      {/*================================================================================================================*/}
      <div>
        <Image src={imagem} alt="Seja bem-vindo" style={{ width: "100%" }} fluid />
      </div>
      {/*================================================================================================================*/}
      {/*================================================================================================================*/}
      <div md="auto" className="meio">
        <Row>
          <Card style={{ width: '18rem', margin: '0 auto', marginTop: '10%' }}>
            <Card.Img variant="top" src={iconCam} width='100px' height='180px' />
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
          <Card style={{ width: '18rem', margin: '0 auto', marginTop: '10%' }}>
            <Card.Img variant="top" src={iconApple} width='100px' height='180px' />
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
          <Card style={{ width: '18rem', margin: '0 auto', marginTop: '10%' }}>
            <Card.Img variant="top" src={iconHelp} width='100px' height='180px' />
            <Card.Body>
              <Card.Title>Ajuda</Card.Title>
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
      <div style={{ backgroundColor: "#1E90FF" }}>
        <h1 className="titulo">Veja algumas das nossas atividades</h1>

      </div>
      {/*================================================================================================================*/}
      {/*================================================================================================================*/}
      <Footer />
    </>






  );
}

export default Home;
