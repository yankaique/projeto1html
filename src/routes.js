import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './pages/index';
import galeria from './pages/galeria';
import atividades from './pages/atividades';
import faq from './pages/faq';
import cEscola from './pages/conhecendo_escola';
import formulario from './pages/formulario';

export default function Routes(){
    return(
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/galeria" component={galeria} />
                <Route path="/atividades" component={atividades} />
                <Route path="/faq" component={faq} />
                <Route path="/conhecer_escola" component={cEscola} />
                <Route path="/formulario" component={formulario} />
            </Switch>
        </Router>
    );
}