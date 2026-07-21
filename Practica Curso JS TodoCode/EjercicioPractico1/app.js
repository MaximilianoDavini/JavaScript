var valor1 = prompt("Ingrese primer valor 1:");
var valor2 = prompt("Ingrese primer valor 2:");
var resta = valor1 - valor2;
var comparacion = resta % 2;
if (resta > 0 && comparacion == 0){
    console.log("Es mayor a 0 y su valor es par");
    
} else {
    console.log("Es menor o igual a 0 y su valor es impar");
}