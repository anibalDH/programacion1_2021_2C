// el código se ejecuta cuando se haya cargado la ventana del navegador
window.addEventListener('load', function () {

  console.log(window);
  console.log(location);
  console.log(location.search);

  // guarda la "queryString" como data "trabajable"
  const parametros = new URLSearchParams(location.search);

  // guarda el valor de la variable get "q"
  const queSeBusca = parametros.get('q');


  // Selección de donde se pondrá la info
  const titulo = document.querySelector('h1');
  const lista = document.querySelector('#trending');


  fetch('https://api.giphy.com/v1/gifs/search?api_key=Qn2Rti5ygLsldRrW5KZh8dAyqfRUlpPR&q=' + queSeBusca + '&limit=18')
    .then(function (respuesta) {
      return respuesta.json();
    })
    .then(function (data) {

      console.log(data.data);

      let gifs = data.data; //array de objetos literales, en donde cada objeto literal represena un gif

      titulo.innerHTML += queSeBusca;

      if ( gifs.length > 0 ) { // si hay resultados

        // Iteramos con un bucle for para poder recorrer el array de gif's y, por cada uno, añadirlo como imagen en un item de lista al HTML
        for ( let i = 0; i < gifs.length; i++ ) {

          lista.innerHTML += `
            <article>
              <a href="detalle.html?id=${gifs[i].id}"
              title="ver detalles del gif">
                <img src="${gifs[i].images.original.url}" alt="${gifs[i].title}">
                <p>${gifs[i].title}</p>
              </a>
            </article>
          `;

        }
      } else { // si no hay resultados
        lista.innerHTML = `
        <article style="width: 100%; text-align: center">
          <h2>
            <span style="color: grey">
              No se encontraron gifs relacionados a </span>
            <span style="text-transform: uppercase">
              ${queSeBusca}</span>.
          </h2>
        </article>
      `;
        }



     

    })
    .catch(function (error) {
        console.log(error);
    });
    
  });