
//Algoritmo utilizando un ciclo.
 let capacidad = parseInt(prompt("Introduzca la capacidad de la disco"))
 let cantidadCliente = 0;
 while (cantidadCliente < capacidad) {
     edad = parseInt(prompt("Nombre de cliente"))
     cantidadCliente++;
     console.log("Queda: " + (capacidad - cantidadCliente) + " cupos en la disco")
 }

 console.log("Queda: " + (capacidad - cantidadCliente) + " cupos en la disco no tenemos espacio")
 console.log("personas que ingresaron: " + cantidadCliente)