// Pedir número mediante prompt y sumarle otro número en cada repetición, realizando una salida por cada resultado


let numero = parseInt(prompt("introduzca un numero"));
let ingresar = true;
let suma = 0;
while (ingresar == true) {
    suma = suma + numero;
    alert("suma repeticion: " + suma)
    let resp = prompt("Desea agragar otro numero S/N").toLocaleUpperCase();
    if (resp == "S") {
        ingresar = true;
        numero = parseInt(prompt("introduzca un numero"));       

    } else ingresar = false;
    
}

