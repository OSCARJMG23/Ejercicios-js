/* 6. Construir el algoritmo en Javascript para un programa
para cualquier cantidad de estudiantes que lea el nombre,
el sexo y la nota definitiva y halle al estudiante con la mayor
nota y al estudiante con la menor nota y cuantos eran
hombres y cuantos mujeres. */

let contHombres = 0
let contMujeres = 0
let notaMenor = 3.0
let nomMenor = []
let notaMayor = 4.5
let nomMayor = []

cantidadE = parseInt(prompt('Ingrese la cantidad de estudiantes: '))
for(let i = 1; i <= cantidadE; i++){
    nombre = prompt('Ingrese el nombre del estudiante: ');
    sexo = prompt('Ingrese el sexo m/f: ').toLowerCase();
    nf = parseFloat(prompt('Ingrese la nota definitiva: '));

    if (nf > notaMayor){
        notaMayor = nf;
        nomMayor = nombre;
    }
    if (nf < notaMenor){
        notaMenor = nf;
        nomMenor = nombre
    }
    if (sexo=='m'){
        contHombres++;
    }else{
        contMujeres++;
    }
}
document.write(`
${nomMayor} tiene la nota mas alta con ${notaMayor}<br>
${nomMenor} tiene la nota menor con ${notaMenor}<br>
cantidad de hombre ${contHombres}<br>
cantidad de mujeres ${contMujeres}
`)