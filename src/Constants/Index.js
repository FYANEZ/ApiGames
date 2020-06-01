const _urlBase = 'https://api.rawg.io/api/games';
const _urlBusqueda = '?search=';
const _urlId = '/';

//export const JuegosMasPopulares = () => `${ _corsAnywhere }${ _urlBase }`;
export const JuegosMasPopulares = () => `${ _urlBase }`;
export const JuegosBuscar = q_track => `${ _urlBase }${ _urlBusqueda }${ q_track }`;
export const JuegosBuscarId = q_id => `${ _urlBase }${ _urlId }${ q_id }`;


