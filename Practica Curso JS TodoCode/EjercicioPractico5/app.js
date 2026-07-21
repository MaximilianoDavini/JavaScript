var fechaIngreso = prompt("Ingrese una fecha con el siguiente formato: MES/DIA/AÑO");
var fecha = new Date(fechaIngreso);
var dia = fecha.getDay();
var diaSemana;
switch (dia) {
    case 0: {
        diaSemana = "Lunes";
        break;
    }
    case 1: {
        diaSemana = "Martes";
        break;
    }
    case 2: {
        diaSemana = "Miercoles";
        break;
    }
    case 3: {
        diaSemana = "Jueves";
        break;
    }
    case 4: {
        diaSemana = "Viernes";
        break;
    }
    case 5: {
        diaSemana = "Sabado";
        break;
    }
    case 6: {
        diaSemana = "Domingo";
        break;
    }
    default: {
        alert("Error, acusalo con tu madre kiko!")
    }
}

alert("Segun la fecha ingresada, el dia "+ diaSemana + " correspode al numero: " + dia + " de la semana");