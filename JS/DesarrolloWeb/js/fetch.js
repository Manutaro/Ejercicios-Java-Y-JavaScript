//Fetch API

//Esta API nos sirve para consumir API´s externas
// GET, POST, PUT, DELETE.


// Por defectp, hace un GET al endpoint products
/**fetch(API_URL) // Llama y espera la respuesta de la API
    .then((response) => {

        if(!response.ok){
            throw new Error("No se pudo completa la solicitud...");

        } //response not ok

        return response.json();

    }) // Recibe respuesta, la convierte de JSON a Objeto.
    //.then( (products) => console.log(products)) // Definir que hago en mi programa o página con esos datos.

    .then((products) => {
        products.forEach((product) => {
            //console.log(product.title);
            document.querySelector("body").innerHTML += `
            
            <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${product.title}</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary">${product.price}</h6>
    <p class=">${product.description}</p>
    
  </div>
</div>
            
            
            
            `//Aceder al body y agregar texto.

        });

    }).catch( (error) => console.log(error) );*/




/*const API_URL = "https://fakestoreapi.com/products";

async function fetchData(){//funciones asincronas, funciones que manejas promesas que pueden que se cumplan o no.
    const response = await fetch(API_URL);
    const data = await response.json();

    return data;

}// fetchData

function renderizarTarjetas(data){

    data.forEach((product) => {

    document.querySelector("body").innerHTML += `
           <div class="card" style="width: 18rem;">
            <div class="card-body">
            <h5 class="card-title">${product.title}</h5>
            <h6 class="card-subtitle mb-2 text-body-secondary">Price: ${product.price} dll.</h6>
        </div>
        </div>
    `;
    });

}// renderizar tarjetas

async function init (){
    const data = await fetchData();
    renderizarTarjetas(data);
}// init

init();*/



const API_URL = "https://fakestoreapi.com/products";

/**
 * Pide los datos a la API de forma asíncrona.
 * @returns {Promise<Array>} Promesa con la lista de productos.
 */
async function fetchData() {
    const response = await fetch(API_URL);

    if (!response.ok) {
        throw new Error(`Error en la solicitud HTTP: ${response.status}`);
    }

    const data = await response.json();
    return data;
}

/**
 * Recibe un arreglo de productos y los dibuja como tarjetas de Bootstrap.
 * @param {Array} data - Lista de productos provenientes de la API.
 * @param {HTMLElement} contenedor - Elemento HTML destino.
 */
function renderizarTarjetas(data, contenedor) {
    let tarjetasHTML = "";

    data.forEach((product) => {
        tarjetasHTML += `
            <div class="col-12 col-md-4 col-lg-3 d-flex align-items-stretch mb-4">
                <div class="card shadow-sm w-100">
                    <img src="${product.image}" class="card-img-top p-3" alt="${product.title}" style="height: 200px; object-fit: contain;">
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title fs-6 text-truncate" title="${product.title}">${product.title}</h5>
                        <h6 class="card-subtitle mb-2 text-body-secondary">$${product.price} USD</h6>
                        <p class="card-text small text-secondary text-truncate">${product.description}</p>
                    </div>
                </div>
            </div>
        `;
    });

    contenedor.innerHTML = tarjetasHTML;
}

/**
 * Función exportada que ejecuta la llamada y actualiza la UI.
 * @param {HTMLElement} contenedor - Div donde se insertarán las tarjetas.
 */
export async function cargarProductos(contenedor) {
    try {
        contenedor.innerHTML = `
            <div class="col-12 text-center my-4">
                <p class="text-primary fw-bold"> Cargando productos desde la API...</p>
            </div>
        `;

        const data = await fetchData();
        renderizarTarjetas(data, contenedor);

    } catch (error) {
        console.error("Error al obtener productos:", error);
        contenedor.innerHTML = `
            <div class="col-12 text-center my-4">
                <p class="text-danger fw-bold"> ¡Error al cargar los productos!. Intenta nuevamente.</p>
            </div>
        `;
    }
}