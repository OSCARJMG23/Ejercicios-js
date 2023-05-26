// Elabore un programa Js que calcule la suma de todod los divisores exactos de un entero dado. y los amigos primos


function calculoDiv(n) {
    let sumaR = 0
    for(let i = 1; i< n ; i++){
        if (n % i ===0){
            sumaR = sumaR + i;
        }
    }
    return sumaR
}

/* n = parseInt(prompt('Ingrese un numero: '))
calculoDiv(n) */

function numAMigos(num1,num2){
    if (calculoDiv(num1) === num2 && calculoDiv(num2) === num1){
        document.write(`Los numeros ${num1} y ${num2} son amigos`)
    }else{
        document.write(`Los numeros ${num1} y ${num2} no son amigos`)
    }
}

num1 = parseFloat(prompt('Ingrese un numero: '))
num2 = parseFloat(prompt('Ingrese otro numero: '))
numAMigos(num1,num2)