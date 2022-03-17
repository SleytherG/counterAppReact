// Desestructuración
// Asignación Desestructurante

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
    rango: 'Soldado'
};

const { nombre, edad, clave} = persona;

// console.log( nombre );
// console.log( edad );
// console.log( clave );

const useContext = ( { nombre, edad, clave, rango = 'Capitan'} ) => {
    console.log( nombre );
    console.log( edad );
    console.log( rango );

    return {
        nombreClave: nombre,
        anios: edad,
        latlng: {
            lat: 14.123,
            lng: -12.322
        }
    }
}

// eslint-disable-next-line react-hooks/rules-of-hooks
const { nombreClave, anios, latlng: { lat, lng } } = useContext( persona );
// const { lat, lng } = latlng;
console.log( nombreClave );
console.log( anios );
console.log( lat );
console.log( lng );
