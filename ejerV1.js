/* Pide la edad y si es mayor de 18 años indica que ya puede conducir. */

var edad = parseInt(prompt('Ingrese aqui su edad: '))
if(edad>=18){
    document.write(`Con ${edad} años ya puede conducir`)
}else{
    document.write(`Con ${edad} años aun no puede conducir`)
}