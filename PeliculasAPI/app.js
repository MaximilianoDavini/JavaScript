const apiUrl = 'https://devsapihub.com/api-movies';

const peliculaContainer = document.getElementById("pelicula-container");

function tarjeta (data) { 
    const lista = document.getElementById("lista");
    var cantidad = 30;
    for (var i = 0; i < cantidad; i++)
    {
    const div = document.createElement("div");
    div.classList.add("pelicula");
    const titulo = document.createElement("h1");
    const imagen = document.createElement("img");
    const texto = document.createElement("p");
    div.appendChild(titulo);
    div.appendChild(imagen);
    div.appendChild(texto);
    peliculaContainer.appendChild(div);
    const option = document.createElement("option");
    lista.appendChild(option)
    option.textContent = data[i].title;
    titulo.textContent = data[i].title;
    imagen.src = data[i].image_url;
    texto.textContent = data[i].description;
    }
}
async function api () {
    const response = await fetch (apiUrl);
    const data = await response.json();
    tarjeta(data)
};

api ();

