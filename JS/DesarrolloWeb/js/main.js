// Importamos ÚNICAMENTE la función exportada desde fetch.js
import { cargarProductos } from "./fetch.js";

/**
 * Cambia el tema de Bootstrap en la etiqueta <html> entre 'light' y 'dark'.
 */
function cambiarTema() {
    const html = document.documentElement;
    const temaActual = html.getAttribute("data-bs-theme");
    const nuevoTema = temaActual === "light" ? "dark" : "light";
    
    html.setAttribute("data-bs-theme", nuevoTema);
}

// Asignación de eventos una vez que el HTML está listo
document.addEventListener("DOMContentLoaded", () => {

    // Seleccionamos los elementos del DOM por su ID
    const temaBtn = document.getElementById("temaBtn");
    const fetchBtn = document.getElementById("fetchBtn");
    const productosContainer = document.getElementById("productosContainer");

    // Evento 1: Cambiar Tema
    if (temaBtn) {
        temaBtn.addEventListener("click", cambiarTema);
    }

    // Evento 2: Cargar Productos desde la API
    if (fetchBtn && productosContainer) {
        fetchBtn.addEventListener("click", () => {
            cargarProductos(productosContainer);
        });
    }

});