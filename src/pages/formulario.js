import React from 'react';
import { Form, Col, Button  } from 'react-bootstrap';

import Menu from './assets/menu';
import Footer from './assets/footer';

import './styles/formulario.css';


function Formulario() {

    return (
        <div className="container-global-form">
            <Menu />
            <div className='container container-formulario'>
                <h1 className="text-form">Formulario</h1>
                <p className="text-form">Tem alguma dúvida? quer agender uma visita? preencha o formulario e entraremos em contato o mais rapido possivel.</p>
                <Form>
                    <Form.Group controlId="formGridAddress1">
                        <Form.Label className="text-form">Digite seu nome: </Form.Label>
                        <Form.Control placeholder="Maria Roberta..." />
                    </Form.Group>

                    <Form.Row>

                        <Form.Group controlId="formGridEmail">
                            <Form.Label className="text-form">Idade: </Form.Label>
                            <Form.Control type="number" placeholder="Digite sua idade..." />
                        </Form.Group>

                        <Col>
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Label className="text-form">Email: </Form.Label>
                                <Form.Control type="email" placeholder="joao@gmail.com" />
                            </Form.Group>
                        </Col>
                    </Form.Row>

                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label className="text-form">Quer agendar uma visita ou tirar uma dúvida ? É só digitar !</Form.Label>
                        <Form.Control as="textarea" placeholder="Digite aqui o que você deseja..." rows="3" />
                    </Form.Group>
                    <Button style={{backgroundColor:"#FFFFFF", borderColor:'#FFFFFF',color:"#000"}} variant="primary" type="submit">
                        Enviar
                    </Button>
                </Form>
            </div>
            <Footer />
        </div>
    );
}

export default Formulario;
