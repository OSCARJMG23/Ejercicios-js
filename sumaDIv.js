// Elabore un programa Js que calcule la suma de todod los divisores exactos de un entero dado.


function calculoDiv(n) {
    let sumaR = 0
    for(let i = 1; i< n ; i++){
        if (n % i ===0){
            sumaR = sumaR + i;
        }
    }
    return document.write(sumaR)
}

n = parseInt(prompt('Ingrese un numero: '))
calculoDiv(n)