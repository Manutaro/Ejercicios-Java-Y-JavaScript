/** 
2. Escribe un programa en javascript que, recibiendo como entrada una palabra, pueda determinar si es un palíndromo o no.

Palíndromo: palabra que se lee igual al derecho y al revés.

Ejemplos:

Ana -> Palíndromo
Oso -> Palíndromo
Gerardo -> No palíndromo
Torre -> No palíndromo*/


alert("¡Bienvenid@! Este codigo determina si una palabra es un palíndromo o no.");

let palabra = prompt("Ingrese una palabra: ");
let esPalindromo = true;

for(let i = 0; i < palabra.length / 2; i++){ // /2 Hace la mitad de la palabra para comparar la primera mitad con la segunda mitad

    if(palabra[i].toLowerCase() !== palabra[palabra.length - 1 - i].toLowerCase()){ // i es la primera mitad y palabra.length - 1 - i es la segunda mitad de la palabra
        esPalindromo = false;
        break;
    }// if

}// for

if(esPalindromo){
console.log(`La palabra "${palabra}" es un palíndromo.`);

} else {
console.log(`La palabra "${palabra}" no es un palíndromo.`);
}

