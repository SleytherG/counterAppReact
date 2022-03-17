import React, { useState } from "react";
import PropTypes from "prop-types";

const CounterApp = ( { value = 10 } ) => {

    const [ counter, setCounter ] = useState( value ); // []

    // handleAdd
    const handleAdd = (e) => {
        // setCounter( counter + 1);
        setCounter( (counter) => {
            return counter + 1;
        } );
    }

    const handleSubstract = (e) => {
        setCounter( ( counter ) => {
            return counter - 1;
        })
    }

    const handleReset = (e) => {
        setCounter( ( counter ) => {
            return counter = value;
        });
    }

    return (
        <React.Fragment>
            <h1>CounterApp</h1>
            <h2 id="value"> { counter }</h2>
            <button onClick={ handleAdd  }>+1</button>
            <button onClick={ handleReset  }>Reset</button>
            <button onClick={ handleSubstract  }>-1</button>
        </React.Fragment>
    );
}
CounterApp.propTypes = {
    value: PropTypes.number
}

export default CounterApp;
