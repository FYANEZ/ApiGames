import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import JuegosContextProvider from './Contexts/JuegosContext';
import DetallesContextProvider from './Contexts/DetallesContext';
import Titulos from './Components/Juegos/Index';
import Detalle from './Components/Detalle/Index';
import Header from './Components/Common/Header'
import './assets/css/Styles.css';

const App = () => (
  <BrowserRouter>
<Header/>
    <Switch>
        <Route exact path='/'>
            <JuegosContextProvider>
              <Titulos />
            </JuegosContextProvider>
        </Route>
        <Route path='/Detalle/Index/:juego_id'>
            <DetallesContextProvider>
              <Detalle/>
            </DetallesContextProvider>
        </Route>
      </Switch>
   </BrowserRouter>
);

App.displayName = 'App';

export default App;
