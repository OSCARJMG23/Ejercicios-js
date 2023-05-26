/* 5. Construir el algoritmo que lea por teclado dos números,
si el primero es mayor al segundo informar su suma y
diferencia, en caso contrario, informar el producto y la
división del primero respecto al segundo. */
let n1 = parseInt(prompt('Ingrese un numero: '))
let n2 = parseInt(prompt('Ingrese otro numero: '))

if (n1 > n2){
    let suma = n1+n2
    let resta = n1-n2
    document.write(`La suma de los numeros ${n1} y ${n2} es ${suma} Y la resta de los numeros es ${resta}`)
}else {
    let multi = n1*n2
    let divi = n1/n2
    document.write(`La multiplicacion de los numeros ${n1} y ${n2} es ${multi} Y la division de los numeros es ${divi}`)
}

