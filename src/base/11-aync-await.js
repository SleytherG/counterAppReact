
// const getImagenPromesa = () =>
//     new Promise( (resolve , reject) => resolve('https://jknasdkjnasd.com'));

export const getImagen = async () => {

    try {
        const apiKey = '7TXKj1A4RXxSIcqMLLDeixWWaQHJWBbr';

        const respuesta = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await respuesta.json();
        const { url } = data.images.original;

        return url;

        // const img = document.createElement('img');
        // img.src = url;
        // const body = document.querySelector('body');
        // body.append( img );

    } catch (error) {
        //Manejo del error
        // console.error( error );
        return 'No existe';
    }

}
getImagen();
