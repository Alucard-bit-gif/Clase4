//Funciones 3.

//Declarar variables.

let ahorro;
let sueldo;
let total;

//leer variables.

let sueldo = Number(prompt("Ingrese el valor de su sueldo"));

//invocar funciones.

let ahorroAnual = Ahorro(sueldo);

//Procedimiento en funciones.

function Ahorro(sueldo){

ahorro = (sueldo*0.15)*4;
return ahorro;
}

function Total(ahorro) {

    Total = ahorro*12
    return Total;
}

//imprimir

alert('El ahorro anual es: ' + Total(ahorroAnual));