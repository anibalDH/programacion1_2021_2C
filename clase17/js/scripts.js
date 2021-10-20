// para que cargue el HTML antes de comenzar
window.addEventListener("load", function() {

     
    /*
    variables necesarias
    */

    // captura en DOM seccion
    const seccion = document.querySelector("section");
    // captura en DOM título
    const titulo = document.querySelector("h1");
    // captura en DOM subtítulo
    const h2 = document.querySelector("h2");
    // captura en DOM obra
    const obra = document.querySelector("section p");



    /* --------------------------
       Agregar contenido a la web
    ----------------------------- */
    
    /*
    en la medida en que pedimos datos,
    los vamos agregando al html
    */

    // pedimos artista
    const artista = prompt("¿de cuál artista sos fan?");

    // Si se ingresó un nombre válido
    if ( artista != null && artista != "" && artista != "ninguno" && artista != "nadie" && artista[0] != " " && artista.length > 2 ) {

        // se incluye artista en h1
        titulo.innerHTML = `<span>el mejor artista:</span>${artista}`;
        // se "estiliza" la seccion
        seccion.classList.add("ok");
        // se "estiliza" h2
        h2.classList.add("ok2");

        // se guarda la mejor obra
        cualObra = prompt("¿cuál es su mejor obra?");

        // se agrega subtítulo
        h2.innerText = "su mejor obra es";

        // se muestra la obra
        obra.innerText = cualObra;
 
    }

    // Si NO se ingresó un nombre
    else {
        // se incluye mensaje en h1
        titulo.innerHTML = `<span>No hay artista favorito</span>¡Que pena!`;
        // se "estiliza" la sección agrgandole clase "ok"
        seccion.classList.add("ok");
    }

});