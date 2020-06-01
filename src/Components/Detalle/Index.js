import React, { Fragment, useContext } from 'react';
import { DetallesContext } from '../../Contexts/DetallesContext';
import ProgressBar from './../Common/Progres_bar';
import BotonPrimario from '../Common/BotonPrimario';
import DetalleDesplegable from './DetalleDesplegable';


const Detalle = () => {
    const { EstadoOperacionDetalle,detalle } = useContext(DetallesContext);
    return (
        <Fragment>
            {  
            EstadoOperacionDetalle ?
                <DetalleDesplegable detalle={ detalle }/> 
               :
                <ProgressBar />
            }
            <BotonPrimario  type="volver" to="/" />
        </Fragment>
    );
}

Detalle.displayName = 'Detalle';

export default Detalle;