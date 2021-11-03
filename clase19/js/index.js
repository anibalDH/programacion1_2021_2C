// el código se ejecuta cuando se haya cargado la ventana del navegador
window.addEventListener('load', function () {


/*  ---------- TRENDING ----------
    pedimos a la API de GIPHY
    los gif que son tendencia
    ------------------------------ */

    // dónde será cargada la info
    const listadoTrending = document.querySelector('#trending');

    // buscamos la API
    fetch('https://api.giphy.com/v1/gifs/trending?api_key=Qn2Rti5ygLsldRrW5KZh8dAyqfRUlpPR&limit=25&rating=g')
        .then( function (respuesta) { // cuando la API retorna info
            // console.log(respuesta);
            return respuesta.json(); // transformamos en 
        })
        .then(function (datos) {
            // console.log(datos);
            let gifs = datos.data; //array de objetos literales, en donde cada objeto literal represena un gif

            // Iteramos con un bucle for para poder recorrer el array de gif's y, por cada uno, añadirlo como imagen en un item de lista al HTML
            for ( let i = 0; i < gifs.length; i++ ) {

                let gif = gifs[i];
                let url = gif.images.original.url;
                let title = gif.title;

                listadoTrending.innerHTML = listadoTrending.innerHTML + `
                <article>
                    <img src="${url}" alt="${title}">
                    <p>${title}</p>
                </article>
                `;
            }
        })
        .catch(function (error) {
            // Si hay un error, ejemplo la API está caída, queremos añadir un mensaje, como item de listadoTrending, al HTML
            listadoTrending.innerHTML = `
            <article>No se encontraron gifs :( </article>
                `;
            console.log(error);
        });


    /*  ------
        RANDOM
        ------ */

    
    // Seleccionamos la imagen en donde vamos a exponer el gif 
    let img = document.querySelector('#random article img');


    fetch('https://api.giphy.com/v1/gifs/random?api_key=Qn2Rti5ygLsldRrW5KZh8dAyqfRUlpPR&tag=&rating=g')
        .then(function (respuesta) {

            return respuesta.json();

        })
        .then(function (data) {

            img.src = data.data.images.original.url;
            // Al atributo src, del elemento imagen,
            // le asignamos el valor de la url del gif (<img src="https://www.gifEjemplo.com">)

            img.alt = data.data.title;
            // Al atributo alt, del elemento imagen,
            // le asignamos el valor del título del gif, por si la imagen no se muestra
        })
        .catch(function (error) {
            console.log(error);
        });
    
});