/* 3. Construir el algoritmo para determinar el voltaje de un
circuito a partir de la resistencia y la intensidad de corriente. */
let resistencia = parseFloat(prompt('Ingrese la resistencia de su circuito: '))
let intensidad = parseFloat(prompt('Ingrese la intensidad de su circuito: '))
let voltaje = resistencia*intensidad

document.write(`El voltaje de su circuito es ${voltaje}W`)