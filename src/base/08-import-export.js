import heroes from "../data/heroes";

/**
 *
 * Using find to search a heroe with same id
 */
export const getheroeById = ( id ) => {
    return heroes.find(element => element.id === id );
};

// filter
/**
 * Filtra todos los elementos que coincidan con la condicion
 */
export const getHeroesByOwner = ( owner ) => {
    return heroes.filter( (heroe) => heroe.owner === owner);
}
