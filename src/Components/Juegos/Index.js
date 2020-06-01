import React, { Fragment, useContext } from 'react';
import { JuegosContext } from '../../Contexts/JuegosContext';
import Juegos from './Juegos';
import Message from './../Common/Mensaje';
import Busqueda from './Busqueda';
import ProgressBar from './../Common/Progres_bar';

const Titulos = () => {
    const { estadoSolicitud, juegos,validateQTrack } = useContext(JuegosContext);
    return (
        <Fragment>
              <Busqueda validateQTrack={ validateQTrack }   />
            {
                estadoSolicitud ?
                    (juegos.length ? <Juegos  juegos={ juegos} /> : <Message text="No se encontraron registros" />)
                :
                    <ProgressBar />
            }
        </Fragment>
    );
}

Titulos.displayName = 'Titulos';

export default Titulos;