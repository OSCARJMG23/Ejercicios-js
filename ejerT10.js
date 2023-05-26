/* 10. Desarrolle un programa cíclico que capture un dato
numérico cada vez, y los vaya acumulando. El programa se
detiene cuando el usuario digita un cero. El programa debe
mostrar: LA SUMATORIA DE LOS VALORES, EL VALOR DEL
PROMEDIO, CUÁNTOS VALORES FUERON DIGITADOS, MAYOR
VALOR Y MENOR VALOR. */

let acumNumeros = 0
let numeros = []

let numero = parseFloat(prompt('Ingrese un numero: '))
while(numero != 0){
    acumNumeros = acumNumeros + numero
    numeros.push(numero)
    numero = parseFloat(prompt('Ingrese otro numero: '))
    
    
}

let maximo = Math.max(...numeros)
        let minimo = Math.min(...numeros)
        document.write(`
        La suma de los numeros que fueron ingresados es de ${acumNumeros}<br>
        El promedio de los numeros ingresados es de ${acumNumeros/numeros.length}
        La cantidad de numeros que fueron ingresados es de ${(numeros.length +1)}<br>
        El numero mas alto que se ingreso fue ${maximo}<br>
        Y el numero minimo fue ${minimo}
        `)