import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ButtonPrimary from './../Common/BotonPrimario';

const Juegos = ({id, name,imagen,genres,platform}) => (
      <Grid item xs={ 12 } sm={ 4 }>
        <img src={ imagen } alt="logo" width="100%" height="60%"></img>
        <Paper className="defaultPaper" >
       
            <h3>{ name }</h3>
            <h4>Genero: {genres.length? genres[0].name : "" }</h4>

                {platform.map(( item, i ) => (
                        <> - {platform[i].platform.name}  </> 
                    ))}
        
            <ButtonPrimary type="Detalle" to={ `/Detalle/Index/${ id }` } />
        </Paper>
    </Grid>
);

Juegos.displayName = 'Juegos';

export default Juegos;