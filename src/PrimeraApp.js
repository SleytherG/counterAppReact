import React from "react";
import PropTypes from 'prop-types';
/**
 * Functional Components
 */
const PrimeraApp = ( { saludo, subtitulo } ) => {

    return (
        <React.Fragment>
            <h1> { saludo }</h1>
            {/*<pre> { JSON.stringify( saludo, null, 3 ) } </pre>*/}
            <p>{ subtitulo }</p>
        </React.Fragment>
    );
}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired,
}

PrimeraApp.defaultProps = {
    subtitulo: 'Soy un Subtitulo 1'
}

export default PrimeraApp;
