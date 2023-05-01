//Del array anterior crear una copia (Que no sea el mismo en si). Mostrar por consola

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  
let array1 = []

 for(i=1; i<=10; i++){
     
     array1.push(getRandomInt(1, 100))

 }
 console.log("Array original")
 console.log(array1)

 let array2 = array1.slice()

 array2.push(5)
 console.log("Array copia")
 console.log(array2)
