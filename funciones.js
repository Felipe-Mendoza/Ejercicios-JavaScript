//1. Validar si un texto introducido no es un numero
function esNumero(num){
    return !isNaN(num)
}

/*2. Generar un orden aleatorio entre 2 numeros, comprobar que estos son numeros, en caso de que el primero sea
mayor que el segundo se intercambians*/

function generarAleatorio(minimo, maximo){
    if(esNumero(minimo) && esNumero(maximo)){
        minimo = parseInt(minimo)
        maximo = parseInt(maximo)

        if (minimo>maximo){
            let aux = maximo
            maximo = minimo
            minimo = aux
        }
        alert("Maximo: "+maximo + " minimo: "+minimo)
        return Math.floor(Math.random() * (maximo - minimo)) + minimo;
    }else{
        console.error("Los numeros no tienen un formato correcto")
    }
   

}
