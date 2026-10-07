/**1. Desarrolla un programa en javascript que, recibiendo como entrada una palabra,
 *  pueda determinar cuantas vocales hay en ella.

Ejemplos:

- Ana: 2 vocales
- Computadora: 5 vocales
- Elo: 2 vocales */

alert("¡Bienvenid@! Este codigo cuenta las vocales en una palabra.");

let palabra = prompt("Ingrese una palabra: ");
let contadorVocales = 0;

for (let i = 0; i < palabra.length; i++) {

    let letra = palabra[i].toLowerCase();

    if
        (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u"){

            contadorVocales++;
        }// if
    
}// for

console.log(`La palabra "${palabra}" tiene ${contadorVocales} vocales.`);


//Reto adicional: Intentar resolver el ejercicio 1 con ciclos anidados



