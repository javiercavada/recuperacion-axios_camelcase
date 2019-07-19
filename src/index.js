import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Contacto from './componentes/contacto';
import Estrenos from './componentes/estrenos';
import MejorValoradas from './componentes/mejorvaloradas';
import Populares from './componentes/populares';
import UneaLogo from '../UneaFilmsLOGO.png';

const App = () => (
  <div className="app">
    <Router>
      <nav className="contenedor">
        <Link className="link" to="/estrenos">
          <span class="glyphicon glyphicon-film"></span>
          &nbsp; &nbsp;Estrenos
        </Link>
        <Link className="link" to="/mejorvaloradas">
          <span class="glyphicon glyphicon-circle-arrow-up"></span>
          &nbsp; &nbsp;Mejor Valoradas
        </Link>
        <Link className="link" to="/populares">
          <span class="glyphicon glyphicon-fire"></span>
          &nbsp; &nbsp;Populares
        </Link>
        <Link className="link" to="/contacto">
          <span class="glyphicon glyphicon-user"></span>
          &nbsp; &nbsp;Contacto
        </Link>
        <img className="center" src={UneaLogo} />
      </nav>
      <div className="contenedor">
        <Route path="/estrenos" render={() => <Estrenos />} />
        <Route path="/mejorvaloradas" render={() => <MejorValoradas />} />
        <Route path="/populares" render={() => <Populares />} />
        <Route path="/contacto" render={() => <Contacto />} />
      </div>
    </Router>
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
