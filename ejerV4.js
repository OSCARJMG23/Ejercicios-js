/* En el siguiente ejercicio vamos a practicar el bucle do while, una validación de números sencilla y la operación de suma

Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos. */

var sumatoria = 0
var numero = parseInt(prompt('Ingrese un numero: '))

do{
    sumatoria += numero
    numero = parseInt(prompt('Ingrese un numero o ingrese "0" para conocer la sumatoria: '))
}while(numero!=0)
document.write(`La sumatoria de los numeros que ingresó es ${sumatoria}`)


/*
//Otra Solucion 
var sumatoria = 0
do{
    var numero = parseInt(prompt('Ingrese un numero: '))
    sumatoria += numero
}while(confirm('Desea continuar ingresando numeros?'))
document.write(`La sumatoria de los numeros que ingresó es ${sumatoria}`) */

/* 
//Solucion curso
// DECLARAMOS LA VARIABLE SUMA
var suma = 0;
// BUCLE DO WHILE PARA INTRODUCIR VARIOS
do {
    // PEDIMOS EL NÚMERO POR TECLADO
    var numero = prompt("Introduce un numero");
    // COMPROBAMOS QUE LO INTRODUCIDO ES UN NÚMERO
    if (Number(numero) == numero) {
        // CONVERTIMOS EL NÚMERO EN INTEGER (POR SI ACASO)
        numero = Number(numero);
        // SUMAMOS LO QUE HAY EN LA VARIABLE SUMA CON ESE NÚMERO
        suma = suma + numero;
    }
    // SI LO INTRODUCIDO NO ES UN NÚMERO
    else {
        // SI SE PULSÓ ACEPTAR SIN PONER UN NÚMERO VÁLIDO
        if (numero != undefined) {
            alert(numero + " No es un numero");
        }
    }
// VOLVEMOS ARRIBA MIENTRAS NO SE PULSE CANCELAR
} while (numero != undefined);
// SI SE PULSÓ CANCELAR SALE DEL BUCLE E IMPRIME EL RESULTADO
document.write(suma); */
