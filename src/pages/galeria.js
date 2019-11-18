import React from 'react';

import { Row } from 'react-bootstrap';

import Menu from './assets/menu';
import Footer from './assets/footer'
import './styles/galeria.css';

import imagem from './images/udyr.jpg';


function Galeria() {
    return (
        <>
            <Menu />
            <div className="container-1 col-11  Row">

                <Row>
                    <div className="zoom">
                        <img src={imagem} alt="" className="img-type img-responsive" />

                    </div>

                    <div className="zoom">
                        <img src={imagem} alt="" className="img-type img-responsive" />

                    </div>

                    <div className="zoom">
                        <img src={imagem} alt="" className="img-type img-responsive" />

                    </div>
                    <div className="zoom">
                        <img src={imagem} alt="" className="img-type img-responsive" />

                    </div>
                    <div className="zoom">
                        <img src={imagem} alt="" className="img-type img-responsive" />

                    </div>
                    <div className="zoom">
                        <img src={imagem} alt="" className="img-type img-responsive" />
                        
                    </div>

                </Row>
            </div>
            <Footer />
        </>

    );
}

export default Galeria;