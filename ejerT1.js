/* 1. Construir el algoritmo para un programa que ingrese tres
notas de un alumno, si el promedio es menor o igual a 3.9
mostrar un mensaje "Estudie“, de lo contrario un mensaje que
diga "becado" */
nombre = prompt('Ingrese su nombre: ')
let n1 = prompt('A continuacion ingrese 3 notas: ')
let n2 = prompt('Ingrese la nota 2: ')
let n3 = prompt('Ingrese la nota 3: ')

let promedio = (parseFloat(n1) +parseFloat(n2) + parseFloat(n3))/3;

if(promedio<=3.9){
    document.write(`${nombre} lo invito a que Estudie ya que tiene un promedio de ${promedio}`)
}else{
    document.write(`Enhorabuena ${nombre} ha sido becado`)
}