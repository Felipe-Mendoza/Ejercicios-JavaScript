//Rellena un array con los numeros aletoreos (10 por ejemplo) mostrar por consola


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  


 let arrayAleatoreo = []

 for(i=1; i<=10; i++){
     
     arrayAleatoreo.push(getRandomInt(1, 100))

 }

 console.log(arrayAleatoreo)