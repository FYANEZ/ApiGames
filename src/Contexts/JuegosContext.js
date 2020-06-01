import React, {createContext, useState, useEffect} from 'react';
import {JuegosMasPopulares,JuegosBuscar} from './../Constants/Index';

export const JuegosContext = createContext();

const JuegosContextProvider = ({children}) => {
    const [estadoSolicitud, setestadoSolicitud] = useState();
    const [juegos, setJuegos] = useState([]);
    const [currentQTrack, setCurrentQTrack] = useState('');


    useEffect(() => getTopJuegos(), []);

    const getTopJuegos = () => {
        fetch(JuegosMasPopulares())
        .then(res => res.json())
        .then(data => {
            setestadoSolicitud(true);
            setJuegos(data.results);
           
        })
        .catch(err => console.log(err));
    }


    const getJuegosText = q_track => {
        fetch(JuegosBuscar(q_track))
        .then(res => res.json())
        .then(data => {
            setestadoSolicitud(true);
            setJuegos(data.results);
        })
        .catch(err => console.log(err));
    }


    const validateQTrack = (e, q_track = document.querySelector('#q_track').value.toLowerCase().trim()) => {
        if(e.type === 'keypress' && e.key !== 'Enter') return ;
        const words = q_track.match(/\w+/g);
        q_track = words && words.join(' ');
        if (q_track && q_track !== currentQTrack) {
            setCurrentQTrack(q_track);
            setestadoSolicitud(false);
            getJuegosText(q_track);
        }
    }

    return (
        <JuegosContext.Provider value={{ estadoSolicitud, juegos,validateQTrack}}>
            { children }
        </JuegosContext.Provider>
    );
};

export default JuegosContextProvider;