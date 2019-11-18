import React from 'react';
import './styles/faq.css';
import { Row } from 'react-bootstrap';

import Menu from './assets/menu';
import Footer from './assets/footer';

import './styles/atividades.css';


function Atividades() {
    return (
        <>
            <Menu/>
            <div  className="container">
            <div className="banner-faq">
                <div className="banner-border">
                    <h1 className="title-banner-faq">Quem somos ?</h1>
                    <h4 className="title-banner-faq" style={{fontSize:"20px",marginTop:"20px"}}>FAQ - 1</h4>
                </div>
            </div>
            <p className="text-faq">Somos uma instituição séria que há 20 anos tenta trazer aos pequenos o máximo de segurança e conforto, hoje somos uma das maiores instituições de ensino com base na avaliação dos pais de toda a região, contamos com uma grande equipe de professores e monitores para levar o melhor para seu filho ou filha.
            </p>
            <div className="seperador"></div>
        

            
            <div className="banner-faq">
                <div className="banner-border">
                    <h1 className="title-banner-faq">Alimentação</h1>
                    <h4 className="title-banner-faq" style={{fontSize:"20px",marginTop:"20px"}}>FAQ - 2</h4>
                </div>
            </div>
            <p className="text-faq"> Nos procupamos com a alimentação dos nossos alunos, oferecemos o melho serviço para que as crianças tenha uma saúde inabalavel, cpntamos com ajuda dos pais para fazer os cardapios.
            </p>
            <div className="seperador"></div>

            <div className="banner-faq">
                <div className="banner-border">
                    <h1 className="title-banner-faq">Plano de ensino</h1>
                    <h4 className="title-banner-faq" style={{fontSize:"20px",marginTop:"20px"}}>FAQ - 3</h4>
                </div>
            </div>
            <p className="text-faq"> Nos procupamos com a alimentação dos nossos alunos, oferecemos o melho serviço para que as crianças tenha uma saúde inabalavel, cpntamos com ajuda dos pais para fazer os cardapios.
            </p>
            <div className="seperador"></div>

            </div>

           
            <Footer />
        </>

    );
}

export default Atividades;