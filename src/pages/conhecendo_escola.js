import React, { Component } from 'react';
import { Row } from 'react-bootstrap';

import Menu from './assets/menu';
import Footer from './assets/footer';

import './styles/conhecer.css';

import Apple from './images/apple.svg'

function Conhecer() {
    return (
        <>
            <Menu />
            <div className="container">
                <h1>Saiba Mais</h1>
                <h5>Aqui é aonde você vai ver algumas curiosidades e informação sobre a nossa instituição.</h5>
            </div>
            <div>
                <Row>
                    <div className="post-conhecer">
            
                        <h1>lorem</h1>
                        <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. A amet deleniti nesciunt dolorem, nemo culpa praesentium. Sint illo error officia quo perspiciatis, architecto nesciunt eligendi cum! Quasi asperiores ad laudantium.</h4>
                      
                        
                    </div>
                    <div className="image-conhecer">
                    <Row>
                        <img src={Apple} alt="" />
                        <img src={Apple} alt="" />
                    </Row>
                    </div>

                </Row>
            </div>
            <div>
                <img src="" alt="" />
                <h1>lorem</h1>
                <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. A amet deleniti nesciunt dolorem, nemo culpa praesentium. Sint illo error officia quo perspiciatis, architecto nesciunt eligendi cum! Quasi asperiores ad laudantium.</h4>
            </div>
            <div>
                <h1>Lorem</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quod quibusdam facere vitae eius similique molestiae eum at libero repellat hic, distinctio officiis, amet atque rerum expedita alias odit! Deserunt!</p>
            </div>

            <Footer />
        </>
    );
}

export default Conhecer;