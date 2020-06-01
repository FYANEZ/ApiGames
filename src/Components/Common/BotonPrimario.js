import React from 'react';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';


const BotonPrimario = ({type, to}) => (
    <Link className="buttonPrimary" to={ to }>
        <Button variant="contained" color="primary">
            {type}
        </Button>
    </Link>
);

BotonPrimario.displayName = 'ButtonPrimary';

export default BotonPrimario;