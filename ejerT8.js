/* 8. Programa que Ingrese por teclado:
a. el valor del lado de un cuadrado para mostrar por pantalla el
perímetro del mismo
b. la base y la altura de un rectángulo para mostrar el área del
mismo */

let lado = parseFloat(prompt('Ingrese el lado del cuadrado: '))
let base = parseFloat(prompt('Ahora ingrese la base del rectangulo: '))
let altura = parseFloat(prompt('Ingrese la altura del rectangulo: '))

document.write(`
El perimetro de su cuadrado es de ${lado*4} Cm<br>
Y el area de su rectangulo es de ${base*altura} Cm
`)