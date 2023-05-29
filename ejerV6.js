/* Vamos a empezar fuerte con un bucle for doble para imprimir números

Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :

1

22

333

4444

55555

666666

……. */

var i, rep;

for(i=1; i<=30; i++){
    for(rep = 0; rep < i; rep++){ 
        document.write(i);
    }
    document.write("<br>");
}

/* // DECLARAMOS LAS VARIABLES    
var i, rep;
// BUCLE FOR PARA RECORRER DE 1 A 30
for (i = 1; i <= 30; i++) {
    // BUCLE INTERIOR PARA HACER LAS REPETICIONES
    for (rep = 0; rep < i; rep++) {
        // IMPRIMIMOS EL NÚMERO i, i VECES
        document.write(i);
    }
    // IMPRIMIMOS UN SALTO DE LÍNEA
    document.write("<br>");
} */