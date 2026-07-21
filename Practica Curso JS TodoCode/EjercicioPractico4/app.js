var confirmacion = window.confirm("Estas a punto de realizar el ingreso de dos valores para determinar cual de los dos es mayor, ¿estas listo?");
if (confirmacion == true){
    var valor1 = parseInt(prompt("Ingrese el primer valor: "));
    var valor2 = parseInt(prompt("Ingrese el segundo valor: "));
    if (valor1 > valor2)
        {
            alert("El mayor es el primer valor");
        } else {
            alert ("El mayor es el segundo valor");
                };

} else {
    alert("Rechazado");
};
