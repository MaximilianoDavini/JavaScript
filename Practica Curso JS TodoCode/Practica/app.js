// // Caso practico If/Else
// var aprobe = true; 

// if (aprobe == true) {
// console.log("Aprobado");
// } else {
//     console.log("Desaprobado");
// }

// // Caso practico Switch ()
// var color = prompt("Ingrese un color");

// switch (color) {
//     case "rojo": {
//         console.log("Ingreso color ROJO");
//         break;
//     }
//     case "amarillo": {
//         console.log("Ingreso color AMARILLO");
//         break;
//     }
//     case "verde": {
//         console.log("Ingreso color VERDE");
//         break
//     }
//     default: {
//         console.log("Color no registrado en sistema");
//         break;
//     }
// };

// //Caso practico bucle While

// let contadorWhile = 0;

// while (contadorWhile <= 10) {
//     console.log("While: Vuelta del bucle Nro. " + contadorWhile);
//     contadorWhile++;
// };

// for (var contadorFor = 0; contadorFor <=10; contadorFor++) {
//     console.log("For: Vuelta del bucle Nro. " + contadorFor);
// };

// //Caso practico bucle Do-While

// let contadorDoWhile = 0;

// do {
//     console.log("DoWhile: Vuelta del bucle Nro. " + contadorDoWhile);
//     contadorDoWhile++;
// } while (contadorDoWhile <=10);

// // Manejo de funciones Alert, Confirm y prompt (cuadros de dialogo)
// // Prompt
// //Solo consulta
// window.prompt("Ingrese un nombre:");
// //Consulta y respuesta predefinida
// prompt("Ingrese un numero", "10");

// //Confirm
// var confirmacion = confirm("Si es un humano presione ACEPTAR");
// if (confirmacion == true)
//     {
//         console.log("Ingreso aceptado.")
//     } else {
//         console.log("Ingreso rechazado.")
//     }
// // Manejo de fechas

// let fecha = new Date ();
// let dia = fecha.getDate();
// let hora = fecha.getHours();
// console.log(fecha, "Dia:" + dia, "Hora:" + hora);

// //Practica Arrays (Vectores y Matrices)

// let vector = [1,2,3,4,5,6];
// console.log("Valor en la posición numero 3: " + vector[2]);
// //Recorrido de array con for

// for (let i = 0; i < vector.length; i++){ 
//     console.log("Posicion: " + i + " Valor: " + vector[i]);
// };

// let matriz = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ];
// console.log("Valor en la fila 3 posición numero 2: " + matriz[2][1]);

// //Recorrido de matriz con 2 for

// //Recorrido de la primer fila
// for (var fila = 0; fila < matriz.length; fila++){
//     for (var col = 0; col < matriz[fila].length; col++)
//         {
//             console.log(matriz[fila][col]);
//             console.log("Fila: " + fila + " Columna: " + col + " Valor: " + matriz[fila][col] );

//         }
// }

// // Metodos en arrays

// let vector2 = new Array(5);
// vector.push("AC");
// vector.push("CC");
// vector.push("AB");
// vector.push("BB");
// vector.push("AA");
// vector.shift();

// // let newVector = vector.filter(x => x.includes("A"));
// let vector3= [1,2,3,4,5]
// console.log(vector2.concat(vector3))
// console.log(vector2.includes('C'));
// console.log( "Ordenado:" + vector.sort());

let string1 = "aaaaaaaaaa, aaaaaaaaaaaaaaaa, bbbbbbbbbb ccccccccccc dddddddd eeeeeeeeee bbbbbbbbbb ddddd"
console.log(string1.split(","));

console.log(string1.slice(30));
console.log(string1.length)
