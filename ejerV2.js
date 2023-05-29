/* En el siguiente ejercicio vamos a practicar con el bucle do while para que el código se ejecute una y otra vez hasta que el usuario decida parar

Pide una nota (número). Muestra la calificación según la nota:

0-3: Muy deficiente
3-5: Insuficiente
5-6: Suficiente
6-7: Bien
7-9: Notable
9-10: Sobresaliente */

var nota = parseFloat(prompt('Ingrese una nota: '))

do{
    if(nota > 0 && nota <= 10){
        if(nota<=3){
            document.write(`La nota ${nota} es muy deficiente`+ '<br>')
        }else if(nota<=5){
            document.write(`La nota ${nota} es insuficiente`+ '<br>')
        }else if(nota<=6){
            document.write(`La nota ${nota} es suficiente`+ '<br>')
        }else if(nota<=7){
            document.write(`La nota ${nota} esta bien`+ '<br>')
        }else if(nota<=9){
            document.write(`La nota ${nota} es notable`+ '<br>')
        }else if(nota<=10){
            document.write(`La nota ${nota} es sobresaliente`+ '<br>')
        }
        nota = parseFloat(prompt('Ingrese otra nota o pulse 0 para conocer la calificion: '))
    }else{
        document.write(`Ingrese una nota`)
    }
}while(nota !=0)