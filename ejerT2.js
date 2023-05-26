/* 2. Dado un número indicar si es par o impar y si es mayor de 10. */
let numero = prompt('Ingrese un numero: ')
if (numero %2 ==0){
    if(numero<10){
        document.write(`El numero ${numero} es par y menor que 10`)
    }else if(numero==10){
        document.write(`El numero ${numero} es par e igual que 10`)
    }else{
        document.write(`El numero ${numero} es par y mayor que 10`)
    }
}else{
    if(numero >=10){
        document.write(`El numero ${numero} es impar y mayor que 10`)
    }else{
        document.write(`El numero ${numero} es impar y menor que 10`)
    }
}