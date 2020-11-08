//Declarar variables.

let Juan;
let Aberto;
let Ana;
let Madre;

//Leer datos
Juan= Number(prompt('¿Cual es tu edad Juan?'));


//Procedimiento.

edadAlberto(Juan);
edadAna(Juan);
edadMadre(Juan);

function edadAlberto(Juan){
    Alberto= (Juan*2)/3
    return Alberto;
}

function edadAna(Juan){
    Ana= (Juan*4)/3
    return Ana;
}

function edadMadre(Juan){
    Madre= Juan+Alberto+Ana
    return Madre;
}

//Imprimir

document.write('La edad de Alberto es'  +' '+ edadAlberto(Juan)); 
document.write('La edad de Ana es' + ' '+ edadAna(Juan));
document.write('La edad de la Madre es' + ' ' + edadMadre(Juan));
document.write('La edad de Juan es' + ' ' + Juan);
































//Ibidem
