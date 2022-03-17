import {getheroeById, getHeroesByOwner} from "../../base/08-import-export";
import heroes from "../../data/heroes";

describe('Pruebas en funciones de heroes', () => {

    test('Debe de retornar un héroe por id', () => {

        const id = 1;

        const heroe = getheroeById( id );

        const heroeData = heroes.find(heroe => heroe.id === id);

        expect( heroe ).toEqual( heroeData );

    });

    test('Debe de retornar undefined si héroe no existe', () => {

        const id = 10;

        const heroe = getheroeById( id );

        // const heroeData = heroes.find(heroe => heroe.id === id);

        expect( heroe ).toEqual( undefined );

    });

    test('Debe retornar un arreglo con los héroes de DC', () => {

        const owner = 'DC';

        const owners = getHeroesByOwner( owner );

        const ownerData = heroes.filter(heroe => heroe.owner === owner);

        expect( owners ).toEqual( ownerData );

    })

    test('Debe retornar un arreglo con los héroes de Marvel', () => {

        const owner = 'Marvel';

        const owners = getHeroesByOwner( owner );

        // const ownerData = heroes.filter(heroe => heroe.owner === owner);

        expect( owners.length ).toBe( 2 );

    })
})
