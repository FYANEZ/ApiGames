import React from 'react';
import Paper from '@material-ui/core/Paper';

const DetalleDesplegable = ({  detalle }) => {
   

    return (
        <Paper className="paper defaultPaper">
             <img src={ detalle.background_image } alt="logo" width="100%" height="60%"></img>
           <h3>{ detalle.name }</h3>
           {detalle.description}

            
        
        </Paper>
    );
}

DetalleDesplegable.displayName = 'DetalleDesplegable';

export default DetalleDesplegable;
