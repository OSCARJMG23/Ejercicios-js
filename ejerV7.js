/* Esta vez probaremos con bucles inversos

Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario de la siguiente forma :

Ej. Si se indica el número 30 el resultado sería:

303030303030303030303030303030303030303030303030303030303030

2929292929292929292929292929292929292929292929292929292929

28282828282828282828282828282828282828282828282828282828

…..

333

22

1 */
var i, rep;
var num = parseInt(prompt('Ingrese un numero para hacer la piramide: '))

for(i = num; i >= 1; i--){
    for(rep = i; rep >= 1; rep--){ 
        document.write(i);
    }
    document.write("<br>");
}


/* // PEDIMOS EL NÚMERO POR TECLADO
var numrep = prompt("Introduce numero de repeticiones");
// SI LO INTRODUCIDO ES UN NÚMERO
if (Number(numrep) == numrep) {
    // SI ES UN NÚMERO ENTRE 1 Y 50
    if (numrep > 0 && numrep <= 50) {
        var rep,i;
        // BUCLE QUE VA DESDE numrep HASTA 1
        for (i = numrep; i >= 1; i--) {
            // BUCLE DESDE i HASTA 1
            for (rep = i; rep >= 1; rep--) {
                document.write(i);
            }
            document.write("<br>");
        }
    } 
    else {
        alert("El número introducido no es válido");
    }
} 
else {
    alert("No has introducido un número");
} */