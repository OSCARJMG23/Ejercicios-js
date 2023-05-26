/* 4. Construir el algoritmo que solicite el nombre y edad de 3
personas y determine el nombre de la persona con mayor edad. */

let nombre1 = prompt('Ingrese nombre de la persona 1: ')
let edad1 = prompt('Ingrese la edad de la persona 1: ')
let nombre2 = prompt('Ingrese nombre de la persona 2: ')
let edad2 = prompt('Ingrese la edad de la persona 2: ')
let nombre3 = prompt('Ingrese nombre de la persona 3: ')
let edad3 = prompt('Ingrese la edad de la persona 3: ')

if(edad1>edad2 && edad1 >edad3){
    document.write(`La persona con mayor edad es ${nombre1}`)
}else if(edad2>edad1 && edad2>edad3){
    document.write(`La persona con mayor edad es ${nombre2}`)
}else{
    document.write(`La persona con mayor edad es ${nombre3}`)
}