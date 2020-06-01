import React, { createContext, useState, useEffect } from 'react';
import { JuegosBuscarId } from './../Constants/Index';

export const DetallesContext = createContext();
const DetallesContextProvider = ({ children }) => {
    const juego_id = window.location.pathname.split('/')[3];
    const [EstadoOperacionDetalle, setEstadoOperacionDetalle] = useState(false);
    const [detalle, setdetalle] = useState([]);
 
    useEffect(() => getDetalle(juego_id), [juego_id]);

    const getDetalle = juego_id => {
        fetch(JuegosBuscarId(juego_id))
			.then(res => res.json())
			.then(data => {
                setEstadoOperacionDetalle(true);
                setdetalle(data);
            })
			.catch(err => console.log(err));
    }
    return (
        <DetallesContext.Provider value={{EstadoOperacionDetalle,  detalle }}>
            { children }
        </DetallesContext.Provider>
    );
};

export default DetallesContextProvider;
