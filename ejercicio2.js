// Pedir un texto mediante prompt, concatenar un valor en cada repetición, realizando una salida por 
// cada resultado, hasta que se ingresa “ESC”.

let texto = prompt("Introduzca texto");
let textoConcatenado = "";
repetir = true;
while (repetir == true) {
    textoConcatenado = textoConcatenado + texto;
    alert("Texto concatenado: " + textoConcatenado);
     texto = prompt("Ingrese otro texto  | Para Salir precione tecla ESC").toLocaleUpperCase();
    if (texto != "ESC") {
        repetir = true;
        

    } else {
        repetir = false;
        alert("Chao Pescao:")
    }
}
