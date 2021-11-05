// el código se ejecuta cuando se haya cargado la ventana del navegador
window.addEventListener('load', function () {

  console.log(window);
  console.log(location);
  console.log(location.search);

  // guarda la "querystring"
  const parametros = new URLSearchParams(location.search);

  // guarda el valor de la variable get "id"
  const cual = parametros.get('id');



  // Selección de donde se pondrá la info
  let img = document.querySelector('#random article img');
  let titulo = document.querySelector('#random article h2');
  let autor = document.querySelector('#autor');
  let imgAutor = document.querySelector('#imgAutor');
  let origen = document.querySelector('#origen');
  let fecha = document.querySelector('#fecha');


  fetch(`https://api.giphy.com/v1/gifs/${cual}?api_key=Qn2Rti5ygLsldRrW5KZh8dAyqfRUlpPR`)
    .then(function (respuesta) {
      return respuesta.json();
    })
    .then(function (data) {

      console.log(data.data);

      titulo.innerText = data.data.title;

      img.src = data.data.images.original.url;
      // Al atributo src, del elemento imagen,
      // le asignamos el valor de la url del gif (<img src="https://www.gifEjemplo.com">)

      img.alt = data.data.title;
      // Al atributo alt, del elemento imagen,
      // le asignamos el valor del título del gif, por si la imagen no se muestra

      if ( data.data.username && data.data.username != "" ) {
        autor.innerText += "autor: " + data.data.username;
      }
      
      if ( data.data.user && data.data.user.avatar_url != "" ) {
        imgAutor.src = data.data.user.avatar_url;  
      }
      
      if ( data.data.source && data.data.source != "" ) {
        origen.innerText += "origen: " + data.data.source;
      }
      
      if ( data.data.trending_datetime && data.data.trending_datetime != "" ) {
        fecha.innerText += `
        tendencia desde: ${data.data.trending_datetime} (horario del lugar de origen)
        `;
      }
      

    })
    .catch(function (error) {
        console.log(error);
    });
    
  });