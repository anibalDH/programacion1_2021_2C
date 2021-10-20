console.log('Práctica de objetos literales');
/* 
Creá un objeto literal misDatos con tu información en sus propiedades:
 nombre
 apellido
 dni
 comidaFavorita
 edad
 */ 
let martinCasas = {
    nombre: 'Mario',
    apellido: 'Neta',
    dni: 12124546,
    comidaFavorita: 'asado',
    edad: 21,
    saludar: function() {
        return `Hola,
mi nombre es ${this.nombre} ${this.apellido}
y tengo ${this.edad} años.`;
    }
}

/*
Implementar el método saludar() en el objeto misDatos que al ser invocado retorne un string así: "Hola mi nombre es NOMBRE APELLIDO y tengo EDAD años".
Imprimí la frase en la consola.
*/
let saludo = martinCasas.saludar();
console.log(saludo);


/*
Vamos a crear un auto como objeto literal con las propiedades:
 marca
 modelo
 anio
 color
 posicion: contendrá como valor inicial 0. 
Los métodos avanzar(n) y retroceder(n) que modifiquen la posición del auto.
avanzar(n) aumenta el valor de la propiedad “posicion”.
retroceder(n) disminuye el valor de la propiedad “posicion”.
*/
let auto = {
    marca: 'ford',
    modelo: 'mustang',
    anio: 2020,
    color: 'naranja',
    posicion: 0,
    avanzar: function(n) {
        this.posicion = this.posicion + n;
        return this.posicion;
    },
    retroceder: function(n) {
        this.posicion = this.posicion - n;
        return this.posicion;
    }
}

auto.avanzar(4);
auto.avanzar(2);
auto.avanzar(20);
auto.retroceder(8);
console.log(auto.posicion);

/*
Creá una nueva variable “nuevoAuto” con las mismas propiedades que la anterior y reemplazá a los métodos avanzar(n) y retroceder(n) por un único método moverse(direccion) que va a recibir como parámetro un número positivo o negativo y modificará la posición del auto la cantidad de pasos necesarios. Probá mover el auto usando el método moverse(direccion).
*/

let nuevoAuto = {
    marca: 'citroen',
    modelo: 'mehari',
    anio: 2020,
    color: 'rojo',
    posicion: 0,
    moverse: function(n) {
        this.posicion = this.posicion + n;
        return this.posicion;
    }
}

nuevoAuto.moverse(10);
nuevoAuto.moverse(3);
nuevoAuto.moverse(24);
nuevoAuto.moverse(-6);
console.log(nuevoAuto.posicion);

/*
Batalla de super héroes
=======================
Ahora sí vamos a la batalla. 
Creá:
* un objeto literal ironMan con las siguientes propiedades y métodos:
 nombre (String) - "Iron Man"
 equipo (String) - "Avengers"
 poderes (Array) - ["Volar", "Lanzar misiles", "Disparar láser"]
 energía (Number) - 100
 getPoder (Fn) - recibe un parámetro numérico. Retornará el poder seleccionado.

* un objeto literal Hulk con las siguientes propiedades/métodos:
 nombre (String) - "Hulk"
 equipo (String) - "Avengers"
 poderes (Array) - ["Aplastar", "Gritar", "Golpear"]
 energia (Number) - 100
 getPoder (Fn) - recibe un parámetro numérico. Retornará el poder seleccionado y la energía restante con la frase:
“Poder Elegido de SUPERHEROE: PODERELEGIDO. Energía restante: ENERGIA.” Deberás usar template literals para construirla.

Utilizando las funciones Math.random() y Math.floor() generá un número entero al azar entre 0 y 2 que estará en relación a nuestro array de poderes.

El número al azar deberá ser pasado al método getPoder(). Cada poder debe descontar 10 de la energía del superhéroe.

Para probar la batalla deberás imprimir por consola a el método getPoder() de cada super héroe pasando el número random dentro de los paréntesis.
*/
let ironMan = {
    nombre: 'Iron Man',
    equipo: 'Avengers',
    poderes: ['Volar', 'Lanzar misiles', 'Disparar láser'],
    energia: 100,
    getPoder: function(n) {
        let poderElegido = this.poderes[n];
        this.energia = this.energia - 10;
        
        return `poderElegido de ${this.nombre}: ${poderElegido}.
Energía restante: ${this.energia}.`;
    }
}

let hulk = {
    nombre: 'Hulk',
    equipo: 'Avengers',
    poderes: ["Aplastar", "Gritar", "Golpear"],
    energia: 100,
    getPoder: function(n) {
        let poderElegido = this.poderes[n];        
        this.energia = this.energia - 10;

        return `poderElegido de ${this.nombre}: ${poderElegido}.
Energía restante: ${this.energia}.`;
    }
}

console.log(ironMan.getPoder(Math.floor(Math.random()*3)));
console.log(hulk.getPoder(Math.floor(Math.random()*3)));
console.log(ironMan.getPoder(Math.floor(Math.random()*3)));
console.log(hulk.getPoder(Math.floor(Math.random()*3)));


//Recordemos que Math.random incluye al 0 y excluye al límite superior, en este caso 3.