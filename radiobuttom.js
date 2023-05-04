//crear 2 radiobutton cuando uno de ellos se selccione muestre un mensaje diciendo cual se selecciono

function muestraOpcion(){

    let opciones = document.getElementsByName("eleccion")
console.log(opciones)
    for(let i=0; i<opciones.length; i++){
        console.log(opciones[i]);
        if(opciones[i].checked){
            alert(opciones[i].innerText)

        }

    }

}