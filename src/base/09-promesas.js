import {getheroeById} from "./08-import-export";

export const getHeroeByIdAsync = ( id ) => {
    return new Promise( ( resolve, reject ) => {
        setTimeout( () => {
            // TAREA
            const p1 = getheroeById(id);
            // console.log(p1);
            if ( p1 ) {
                resolve( p1 );
            } else {
                reject('No se pudo encontrar el heroe');
            }
        }, 1500);
    });

}
