const apiUrl = 'https://devsapihub.com/api-movies';


const peliculaContainer = document.getElementById("pelicula-container");
const lista = document.getElementById("lista");

//Creo un array vacio para almacenar las pelis
var peliculasData = [];

// Creo funcion para actualizar el section
function actualizarPelis (data) {
        const optionTodas = document.createElement("option");
        optionTodas.value = "todas"
        optionTodas.textContent = "Cargar todas";
        lista.appendChild(optionTodas);
        //Asigno los valores al section
        for (let i = 0; i < data.length; i++)
        {
        const option = document.createElement("option");
        lista.appendChild(option);
        option.value = i;
        option.textContent = data[i].title;
        // console.log("ID: " + option.value + " Contenido: " + option.textContent);
        }
}

// Funcion para mostrar solo la pelicula deseada mediante indice asignado
function tarjeta (pelicula) { 
    const div = document.createElement("div");
    div.classList.add("pelicula");
    peliculaContainer.appendChild(div);
    //
    const titulo = document.createElement("h1");
    const imagen = document.createElement("img");
    const texto = document.createElement("p");
    //
    div.appendChild(titulo);
    div.appendChild(imagen);
    div.appendChild(texto);
    //
    titulo.textContent = data.title;
    imagen.src = data.image_url;
    texto.textContent = data.description;
}

function tarjetaTotales (data) {
   data.forEach(pelicula => tarjeta(pelicula));
}

function tarjetaPantalla() {

    if (lista.value === "todas") {
        tarjetaTotales(peliculasData);
    } else {
        const index = parseInt(lista.value);
        tarjeta(peliculasData[index]);
    }
}

async function api () {
    const response = await fetch (apiUrl);
    const data = await response.json();
    //Cargo las pelis en el array
    peliculasData = data;
    actualizarPelis(peliculasData);
    tarjetaPantalla();
};

lista.addEventListener("change", tarjetaPantalla);
api ();