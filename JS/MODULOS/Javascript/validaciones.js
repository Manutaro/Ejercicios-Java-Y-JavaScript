/**
 *  VALIDACIONES: Este espacio se encarga de validar los nombres y correos de los usuarios.
 */

export function validarCorreo(correo) {
    
    const escribirCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    /** Esto se le llama una expresion regular,
    tambien conocida como RegEx, Sirve para comprobar si un texto cumple determinado patrón.

    ^ = Significa que el texto comieza aqui.
    $ =  Texto debe terminar aqui. /^ gasjgjka $/ = El texto debe seguir exactamente este patrón.
    abcd...z
    ABCD...Z
    0-9
    . - % + - = Tambien se permiten estos caracteres especiales.
    [a-zA-Z0-9._%+-]+ <- Ese + significa que puede haber uno o más de estos caracteres.
    @ = Significa que debe haber un @ en el correo.
    [a-zA-Z0-9.-]+ <- Esto significa que puede haber uno o más de estos caracteres.
    \. = Significa que debe haber un punto en el correo.
    [a-zA-Z]{2,} <- Esto significa que debe haber al menos 2 letras y pueden ser más.

     */

    return escribirCorreo.test(correo);// .test Comprueba si correo o nombre cumplen con la expresion regular y devuelve true o false.

    
}//validarCorreo.

export function validarNombre(nombre){

    const escribirNombre = /^[a-zA-Z]{3,}$/;

    return escribirNombre.test(nombre);

}// validarNombre.

