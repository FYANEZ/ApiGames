import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import Juego from './Juego';


const Juegos = ({ juegos }) => (
    <Fragment>
        <div className="root">
            <Grid container spacing={ 5 } justify="center">
                {
                  juegos.map(juego => {
                    const {
                        id,
                        name,
                        genres,
                        platforms,
                        background_image
                    } = juego;

                     return (
                            <Juego
                            key={ id }
                            id={ id }
                            name={ name }
                            imagen ={ background_image }
                            genres = { genres}
                            platform = { platforms }
                            />
                        );
                    })  
                }
            </Grid>
        </div>
    </Fragment>
);

Juegos.displayName = 'Juegos';

export default Juegos;