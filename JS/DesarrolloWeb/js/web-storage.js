//web storage

//localStorage.setItem("clave o key", "valor");

//localStorage.setItem("nombre","Manuel");
//sessionStorage.setItem("nombre","Manuel");

//getItem - Recupera un dato dentro del localStorage
//localStorage.getItem("nombre")
//sessionStorage.getItem("nombre");

//console.log(localStorage.getItem("nombre"));

/*if(localStorage.getItem("nombre" === "Manuel")){
    console.log("Adivinaste");
}else{
    console.log("El nombre real es: " + localStorage.getItem("nombre"));
}//else*/


//localStorage.removeItem("nombre");

// Evaluar si el elemento ya existe localStorage

/**if(localStorage.getItem("nombre") === null){
//setItem -Crear un dato nuevo dentro del localStorage
localStorage.setItem("nombre", "Manuel");
//getItem - Recupera un dato dentro del localStorage
console.log(localStorage.getItem("nombre"));

} else {
    localStorage.removeItem("nombre")
    localStorage.clear();
}*/


function cambiarTema(){
    const temaBtn = document.getElementById("temaBtn");
    const html = document.querySelector("html");
    let temaActual;
    //let tema = html.getAttribute("data-bs-theme");


     if( localStorage.getItem("tema") != null){ // Revisa si el elemento tema ya existe dentro de localStorage
        temaActual = localStorage.getItem("tema");//Devuelve light/dark
        html.setAttribute("data-bs-theme", temaActual);// Se renderiza el color segun localStorage

     } else{ //SI NO EXISTE
        localStorage.setItem("tema", "light");// Lo crea con el valor inicial "Light"
        temaActual = localStorage.getItem("tema");//Actualiza temaActual con localStorage
        html.setAttribute("data-bs-theme", temaActual);//Renderiza en html segun el temaActual
     }//else

    //temaActual = localStorage.getItem("tema");
    //temaActual = html.getAttribute("data-bs-theme");
    // localStorage.setItem("tema", temaActual); //Aqui se guarda el tema actual.

        temaBtn.addEventListener("click", () =>{

          if( temaActual === "light"){// Lee el valor de data-bs-theme en HTML
        temaActual = html.setAttribute("data-bs-theme", "dark");//Si es light, lo cambia a dark
        temaActual= html.getAttribute("data-bs-theme");//Actualiza el valor de teamActual
        localStorage.setItem("tema", temaActual);

    } else{
        temaActual = html.setAttribute("data-bs-theme","light");// Si no es light, lo define asi.
        temaActual = html.getAttribute("data-bs-theme");// Actualiza el valor de temaActual
        localStorage.setItem("tema", temaActual);

    }//else  
        });
}//cambiarTema

cambiarTema();

