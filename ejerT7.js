/* 7. Programa que pida el ingreso del nombre y precio de un artículo y la
cantidad que lleva el cliente. Mostrar lo que debe pagar el comprador
en su factura. */

let cProductos = 0
let totalP = 0
let opcion = true

let nombreC = prompt('Ingrese el nombre del Cliente: ')
while (opcion){
    let precioP = parseFloat(prompt('Ingrese el precio del prodcuto: '))
    totalP += precioP
    cProductos++
    let masP = prompt(`${nombreC} tiene ${cProductos} producto(s), tiene mas? s(si) / n(no, imprimir factura): `).toLowerCase();
    if(masP== 'n'){
        opcion =false
    }
}
document.write(`
******** Factura ********<br>
Señor(@) ${nombreC} ha registrado un total de ${cProductos} productos<br>
Y el valor total a pagar es de ${totalP} mil pesos.
`)

//Solucion easy

/* let nombre = prompt('Ingrese el nombre del Cliente: ')
let cantidad = parseInt(prompt('Cuantos productos son: '))
let valor = parseFloat(prompt('Ingrese el valor del producto: '))
document.write(`Señor(@) ${nombre} tiene una cantidad de ${cantidad}<br>
Y el total a pagar es de ${cantidad*valor} mil pesos
`) */