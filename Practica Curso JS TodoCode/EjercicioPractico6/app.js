var listaNombres = ["juan", "pepe", "sandro", "pedro", "jose"];
var teclado = prompt("Ingrese un nombre:", "Ej.: Bartolo");

function buscarNombre (listaNombres, teclado) {
    // return listaNombres.includes(teclado); // validacion sensible a MyM
    return listaNombres.map(x => x.toLowerCase()).includes(teclado.toLowerCase()); //validacion sin sensibilidad
}

var resultado = buscarNombre(listaNombres, teclado);

// Muestro por consola el resultado 
if (resultado == true)
    {
        console.log("El nombre: " + teclado + " esta en la lista.");
    }
else
{
    console.log("No existe");
}
