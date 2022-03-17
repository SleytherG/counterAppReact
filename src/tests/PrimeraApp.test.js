import React from "react";
import {render} from "@testing-library/react";
import '@testing-library/jest-dom'
import PrimeraApp from "../PrimeraApp";
import {shallow} from "enzyme";

describe('Pruebas en <PrimeraApp />', () => {

    // test('Debe de mostrar el mensaje Hola soy goku', () => {
    //     const saludo = 'Hola, soy Goku';
    //     const { getByText } = render( <PrimeraApp saludo={ 'Hola, soy Goku' } />);
    //     expect( getByText( saludo + '!!' ) ).toBeInTheDocument();
    // });

    test('Debe de mostrar el componente <PrimeraApp /> Correctamente', () => {

        const saludo = 'Hola ,soy Goku';
        const wrapper = shallow( <PrimeraApp saludo={ saludo }/>);

        expect( wrapper ).toMatchSnapshot();
    })

    test('Debe de mostrar el subtitulo enviado por props', () => {

        const saludo = 'Hola, Soy Goku';
        const subtitulo = 'Soy un Subtitulo';

        const wrapper = shallow(<PrimeraApp saludo={ saludo } subtitulo={ subtitulo }/>);

        const textoParrafo = wrapper.find('p').text();

        console.log(textoParrafo);

        expect( textoParrafo ).toBe( subtitulo );
    })
})
