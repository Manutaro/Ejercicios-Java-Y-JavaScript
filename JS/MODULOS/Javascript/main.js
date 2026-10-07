/**
 * ARCHIVO PRINCIPAL.(Este archivo se encarga de controlar el funcionamiento del programa.)
 * muestra el menu, solicita los datos e interactua con el usuario.
 */

import { Usuario } from "./usuario.js";
import { validarNombre, validarCorreo } from "./validaciones.js";

const usuarios = [];

let opcion;

do {

    opcion = (prompt("¡BIENVENIDO!\n ¿Qué operación deseas realizar?\n\n" +
        "1. Crear un Usuario\n" +
        "2. Mostrar Usuarios\n" +
        "3. Buscar Usuario\n" +
        "4. Salir"));

    // Aqui se crea un Usuario:

    if (opcion === "1") {

        const nombre = prompt("Ingresa tu nombre:");
        const correo = prompt("Ingresa tu correo");

        const nombreValido = validarNombre(nombre);
        const correoValido = validarCorreo(correo);

        console.log(" Usuario creado con exito!");
        console.log(`Nombre válido: ${nombreValido}`);
        console.log(`Correo válido: ${correoValido}`);

        if (nombreValido && correoValido) {

            const usuario = new Usuario(nombre, correo);

            usuarios.push(usuario);
            console.log("¡Usuario creado con exito!");
            console.log(usuario);


        } else {

            if (!nombreValido) {
                console.log("¡Error!: El nombre debe tener minimo 3 letras y contener únicamente letras");

            }
            if (!correoValido) {
                console.log("¡Error!: El correo no es válido");
            }

        }

    }//if.

    // Aqui se crean los usuarios.

    else if (opcion === "2") {
        console.log("Usuarios registrados:");

        if (usuarios.length === 0) {
            console.log("No hay usuarios registrados");

        } else {

            for (let i = 0; i < usuarios.length; i++) {
                console.log(`${i + 1}. ${usuarios[i].nombre}- ${usuarios[i].correo}`);
            }//else


        }//else if

    } else if (opcion === "3") {
        const buscarUsuario = prompt("Ingresa el nombre del usuario que deseas buscar:");
        let usuarioEncontrado = null //

        for (let i = 0; i < usuarios.length; i++) {
            if (usuarios[i].nombre === buscarUsuario) {
                usuarioEncontrado = usuarios[i];
                break;
            }
        }
        if (usuarioEncontrado !== null) {

            console.log("¡Usuario encontrado!:");
            console.log(`Nombre: ${usuarioEncontrado.nombre}`);
            console.log(`Correo: ${usuarioEncontrado.correo}`);


        } else {
            console.log(`No se encontró ningún usuario con el nombre: ${buscarUsuario}`);

        }

    }

    // Opcion Salir.

    else if (opcion === "4") {
        console.log("¡Programa finalizado!");

    }

    // Opcion invalida.

    else {
        console.log("¡Opcion invalida!");

    }


} while (opcion !== "4");






