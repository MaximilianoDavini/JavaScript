const body = document.body;
body.style.background = "lightblue";
body.style.height = "100vh";
body.style.width = "100%";
body.style.margin = "0";
body.style.padding = "0";
body.style.display = "flex";
body.style.flexDirection = "column";
body.style.justifyContent = "center";
body.style.alignItems = "center";

const h1Titulo = document.getElementById("h1-titulo");
body.appendChild(h1Titulo);
h1Titulo.style.height = "30vh";
h1Titulo.style.width = "100%";
h1Titulo.style.fontSize = "100px";
h1Titulo.style.background = "rgb(0,0,0,0.3)";
h1Titulo.style.border = "2px solid black";
h1Titulo.style.color = "white";
h1Titulo.style.textAlign = "center";
h1Titulo.style.display = "flex";
h1Titulo.style.flexDirection = "column";
h1Titulo.style.justifyContent = "center";
h1Titulo.style.alignItems = "center";
h1Titulo.style.textShadow = "2px 5px black"

const divContainer = document.createElement ("div");
divContainer.classList.add("div-container");
body.appendChild(divContainer);
divContainer.style.background = "rgb(0,0,0,0.3)";
divContainer.style.height = "70vh";
divContainer.style.width = "100%";
divContainer.style.border = "2px solid black";
divContainer.style.display = "flex";
divContainer.style.flexDirection = "row"
divContainer.style.justifyContent = "center";
divContainer.style.alignItems = "center";

const ApiUrl = 'https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMake/renault?format=json';
async function obtenerDatosApi () {
    const response = await fetch(ApiUrl);
    const results = await response.json();
    // const body = document.body;
    // body.innerHTML = results;
    console.log(results.Results);
    for (let i = 0; i < results.Results.length; i++)
        {
            crearElemento(results, i);        
        }
    
};
obtenerDatosApi ();

function crearElemento (results, i) {

const divElements = document.createElement("div");
divElements.classList.add("div-elements");
divContainer.appendChild(divElements);
divElements.style.background = "rgb(0,0,0,0.3)";
divElements.style.height = "90%";
divElements.style.width = "90%"
divElements.style.margin = "1%";
divElements.style.display = "flex";
divElements.style.flexDirection = "column"
divElements.style.justifyContent = "center";
divElements.style.alignItems = "center"
divElements.style.border = "2px solid black";
divElements.style.color = "white";
const marca = document.createElement("h1");
const idModelo = document.createElement("p")
const modelo = document.createElement("p")
divElements.appendChild(marca);
divElements.appendChild(idModelo);
divElements.appendChild(modelo);
marca.style.textShadow = "2px 5px black"
idModelo.style.fontSize = "30px";
modelo.style.fontSize = "30px";

marca.textContent = "Marca: " + results.Results[i].Make_Name;
idModelo.textContent = "ID: " + results.Results[i].Model_ID;
modelo.textContent = "Modelo: " + results.Results[i].Model_Name;
};
