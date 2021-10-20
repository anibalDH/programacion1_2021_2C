/*
ejemplos vistos durante la clase teórica de "funciones"
*/
console.log(`
ejemplos vistos durante
la clase teórica de "funciones"

`);


// 1º declaración de una función con parámetros
function saludo( nombre ) {

  let saludoInicio = 'Hola, ';
  return saludoInicio + nombre; 

}

/* 2º invocación de la función
   guardando el valor en una variable */
let unaVariable = saludo('Mario Neta');
console.log(unaVariable);


// 1º declaracion sin parámetros
function saludo2() {

  let saludoInicio = 'Algo diferente';
  console.log(saludoInicio);

}
// 2º invocación
saludo2();



/*
ejercicio 1
*/

// declaro función rectángulo
function rectangulo( ancho, alto ) {

  return 'área del rectángulo: ' + ancho * alto;

}

// invoco función rectángulo y guardo en variable
let areaRectangulo = rectangulo(10, 5);
// imprimo en consola
console.log(areaRectangulo);

// invoco función rectángulo otra vez
areaRectangulo = rectangulo(6, 4);
// imprimo en consola
console.log(areaRectangulo);

