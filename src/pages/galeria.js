import React from 'react';

import { Row } from 'react-bootstrap';

import Menu from './assets/menu';
import Footer from './assets/footer'
import './assets/galeria.css';

import imagem from '../udyr.jpg';


function Galeria() {
    return (
        <>
            <Menu />
            <div className="container-1 col-lg-14 Row">

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