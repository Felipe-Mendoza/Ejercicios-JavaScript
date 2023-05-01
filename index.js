
/*Simulador interactivo

 Cotizador de envios de encomiendas

 */
 let Origen = "";
 let Destino = "";
 let montoDistacia = 0;
 let ciudadOrigen = "";
 let ciudadDestino = "";
 
 /*************************************************************** 
 Funcion que determina el valor de acuerdo a la distancia
 ****************************************************************/
 
 const calculaPrecioDistancia = (ciudadOrigen, ciudadDestino) => {
     if (ciudadOrigen == "A" & ciudadDestino == "B") {
         montoDistacia = 10;
     } else if (ciudadOrigen == "A" & ciudadDestino == "C") {
         montoDistacia = 30;
     } else if (ciudadOrigen == "B" & ciudadDestino == "A") {
         montoDistacia = 10;
     } else if (ciudadOrigen == "B" & ciudadDestino == "C") {
         montoDistacia = 20;
     } else if (ciudadOrigen == "C" & ciudadDestino == "A") {
         montoDistacia = 30;
     } else if (ciudadOrigen == "C" & ciudadDestino == "B") {
         montoDistacia = 20;
     } else if (ciudadOrigen == "A" & ciudadDestino == "A") {
         montoDistacia = 0;
         alert("Solo se realizan viajes entre ciudades, no en la misma ciudad")
         alert("Sera dirigido al inicio para que introduzca nuevamente los datos")
         principal()
     } else if (ciudadOrigen == "C" & ciudadDestino == "C") {
         montoDistacia = 0;
         alert("Solo se realizan viajes entre ciudades, no en la misma ciudad")
         alert("Sera dirigido al inicio para que introduzca nuevamente los datos")
         principal()
     } else if (ciudadOrigen == "B" & ciudadDestino == "B") {
         montoDistacia = 0;
         alert("Solo se realizan viajes entre ciudades, no en la misma ciudad")
         alert("Sera dirigido al inicio para que introduzca nuevamente los datos")
         principal()
     }
     return montoDistacia;
 }
 
 /*************************************************************** 
 Funcion que determina el valor de acuerdo al peso
 ****************************************************************/
 let montoPeso = 0;
 const calculaPrecioPeso = (pesoEncomienda) => {
     switch ((0 <= pesoEncomienda && pesoEncomienda <= 20) ? 0 : (20 < pesoEncomienda && pesoEncomienda <= 40) ? 1 : (40 < pesoEncomienda && pesoEncomienda <= 60) ? 2 : (60 < pesoEncomienda) ? 3 : 4) {
         case 0:
             return montoPeso = 10;
             break;
         case 1:
             return montoPeso = 20;
             break;
         case 2:
             return montoPeso = 30;
             break;
         case 3:
             return montoPeso = 100;
             break;
         default:
             alert('Lo lamentamos, no pudimos calcular su peso');
     }
 }
 
 /*************************************************************** 
 Funcion que calcula el monto total del flete
 ****************************************************************/
 
 const calcularValorFlete = (valor1, valor2) => {
     let suma = valor1 + valor2
     return suma
 }
 
 /*************************************************************** 
 Principal
 ****************************************************************/
 const principal = () => {
     alert("Bienvenido al cotizador de envio")
 
     let Resp = prompt("¿Desea cotizar un envio? (S:Si / N:No)").toLocaleUpperCase();
     while (Resp == "S") {
         Origen = prompt("Ciudad origen A , B o C").toLocaleUpperCase();
         Destino = prompt("Ciudad destino A , B o C").toLocaleUpperCase();
         let fleteDistancia = calculaPrecioDistancia(Origen, Destino);
         if (fleteDistancia > 0) {
             let peso = parseFloat(prompt("Introduzca el peso de la encomienda"));
             let precioPeso = calculaPrecioPeso(peso);
             alert("El monto del flete es: " + calcularValorFlete(precioPeso, fleteDistancia) + " Dolares");
         } else break;
         Resp = "N";
         Resp = prompt("¿Desea cotizar un nuevo envio? (S:Si / N:No)").toLocaleUpperCase();
 
     }
     
     
    
 
 }
 principal();