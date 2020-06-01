import React, {Fragment} from 'react';
import Message from './../Common/Mensaje';
import ButtonPrimary from './../Common/BotonPrimario';

const NotFound = () => (
    <Fragment>
        <Message text="404: URL Not Found" />
        <ButtonPrimary type="back" to="/" />
    </Fragment>
);

NotFound.displayName = 'NotFound';

export default NotFound;