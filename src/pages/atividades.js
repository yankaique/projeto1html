import React from 'react';

import { Row } from 'react-bootstrap';

import Menu from './assets/menu';
import Footer from './assets/footer';

import './styles/atividades.css';

import iconBook from './images/open-book.svg';
import iconAward from './images/award.svg';
import iconBasket from './images/basketball.svg';

function Atividades() {
    return (
        <div className="container-global " >

            <Menu />
            <div className="area-titulo ">
                <h1 className="texto-card">Atividades</h1>
                <h4 className="texto-card">Nós da ABC priorizamos muito as atividades como leitura e esportes, logo abaixo temos um guia para lhe ajudar melhor.</h4>
            </div>
            <div className="container-center d-flex justify-content-center ">
                <Row>
                    <div className="card-left card-left  col-sm-4">
                        <img src={iconBook} className="icon" alt="Icone livro"/>
                        <h2 className='texto-card'>De olho na leitura !</h2>
                        <p className='texto-card'>Aqui a leitura é fundamental para que as crianças desenvolvam um olhar crítico além de incentivar a criatividade.</p>
                    </div>
                    <div className="card-center card-center  col-sm-4 ">
                        <img src={iconAward} className="icon" alt="Icone trofeu"/>
                        <h2 className='texto-card'>Seja o Campeão !</h2>
                        <p className='texto-card'>Oferecemos diversos desafios com o intuito das crianças se divertirem e aprender cada vez mais.</p>
                    </div>
                    <div className="card-right   col-sm-4">
                    <img src={iconBasket} className="icon" alt="Icone bola de basket"/>
                    <h2 className='texto-card'>Bora uma bolinha ?</h2>
                    <p className='texto-card'>Acreditamos que o esporte é algo fundamental na vidade de qualquer criança, além de unir os pequenos, o esporte pode ajudar tanto físicamente quanto mentalmente.</p>
                    </div>
                    
                </Row>
            </div>
            <br/>
            <Footer />
        </div>

    );
}

export default Atividades;