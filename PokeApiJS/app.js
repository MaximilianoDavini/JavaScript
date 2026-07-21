document.body.style.height = "100%";
document.body.style.width = "100vw";
document.body.style.display = "flex";
document.body.style.flexDirection = "row";
document.body.style.justifyContent = "space-between";
document.body.style.alignItems = "center";
document.body.style.flexWrap = "wrap";

const containerGral = document.querySelector(".container-gral");

function crearTarjeta (results) {
    // Creo un div container
const div = document.createElement("div");
div.classList.add("container");
document.body.appendChild(div);
div.style.width = "500px";
div.style.height = "500px";
div.style.border = "2px solid black"
div.style.backgroundColor = "lightblue"
div.style.display = "flex";
div.style.flexDirection = "column";
div.style.justifyContent = "center";
div.style.alignItems = "center";

const containerTarjeta = document.querySelector(".container")
containerGral.appendChild(containerTarjeta);

// Creo titulo, texto e imagen
const titulo = document.createElement("h1");
titulo.classList.add("h1-titulo");
div.appendChild(titulo);
const texto = document.createElement("p");
texto.classList.add("p-texto");
div.appendChild(texto);
const imagen = document.createElement("img");
imagen.classList.add("img-imagen");
div.appendChild(imagen);
imagen.style.height = "300px";
imagen.style.width = "300px";

titulo.textContent = results.name.toUpperCase();
texto.textContent = "Habilidad: " + results.abilities[0].ability.name;
imagen.src = results.sprites.other.dream_world.front_default;

};

async function obtenerDatos () {
    const apiUrl = "https://pokeapi.co/api/v2/pokemon/";
    let cantidadPokemon = 50;
   
    //Consumo de datos - API    

    for (let i = 1; i < cantidadPokemon; i++ )
    {
            const apiUrlAux = apiUrl + i;
            console.log(apiUrlAux)

        const response = await fetch(apiUrlAux);
        const results = await response.json();
        crearTarjeta(results);
    }

};
obtenerDatos();


// Prubas...

// const apiUrlTest = 'https://pokeapi.co/api/v2/pokemon/';

// async function testApi () {
//     const responseTest = await fetch(apiUrlTest);
//     const visualResponse = await responseTest.json();

//     console.log(visualResponse)

// }

// testApi();