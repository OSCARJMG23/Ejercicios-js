var nombre, hijos;
nombre = prompt('cual es su nombre: ');
hijos = prompt('Tienes hijos? S(si)/N(no): ');
if(hijos=='s' || hijos== 'S'){
    let     cHijos = prompt('Cuantos hijos tienes: ');
    document.write('Te llamas ', nombre, '<br>');
    document.write('Y tienes ', cHijos,' ' ,'hijos<br>');
}
else{
    document.write('Te llamas ', nombre, '<br>');
    document.write('Lo siento, no eres fertil');
}

    