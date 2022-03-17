
const personajes = ['Goku', 'Vegeta', 'Trunks'];

const [ , , p4  ]= [...personajes, 'Krilin'];

export const retornaArreglo = () => {
    return ['ABC', 123];
}

const [ letras, numeros ] = retornaArreglo();

const useState = ( valor ) => {
    return [ valor, () => { console.log('Hola Mundo' ) } ];
}

// eslint-disable-next-line react-hooks/rules-of-hooks
const [ nombre, setNombre ] = useState('DBZ')

setNombre();

