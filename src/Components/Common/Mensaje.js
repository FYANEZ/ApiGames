import React from 'react';

const Mensaje = ({text}) => (
    <h2 className="message">{text}</h2>
);

Mensaje.displayName = 'Message';

export default Mensaje;

