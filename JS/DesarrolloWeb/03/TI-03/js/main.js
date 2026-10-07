
const iptTarea = document.getElementById("iptTarea");
const btnAgregar = document.getElementById("btnAgregar");
const listaTareas = document.getElementById("listaTareas");

const alertaTarea = document.getElementById("alertaTarea");

btnAgregar.addEventListener("click", function() {

    const textoTarea = iptTarea.value.trim();

    if (textoTarea === "") {

        alertaTarea.classList.remove("d-none");
        alertaTarea.classList.add("d-flex");

        return;
    }

    alertaTarea.classList.add("d-none");
    alertaTarea.classList.remove("d-flex");

    const nuevaTarea = document.createElement("li");

    nuevaTarea.textContent = textoTarea;

    nuevaTarea.classList.add("list-group-item");

    listaTareas.appendChild(nuevaTarea);

    iptTarea.value = "";

});


