dineroCofla = prompt("Cuanto dinero tienes cofla? ");
dineroRoberto = prompt("Cuanto dinero tienes Roberto? ");
dineroPedro = prompt("Cuanto dinero tienes Pedro? ");

dineroCofla = parseInt(dineroCofla);
dineroRoberto = parseInt(dineroRoberto);
dineroPedro = parseInt(dineroPedro);

if(dineroCofla >= 0.6 && dineroCofla < 1){
    alert("Cofla; Comprate el helado de agua")
    alert("Y te sobran"+ (dineroCofla - 0.6));
}
else if(dineroCofla >= 1 && dineroCofla < 1.6){
    alert("Cofla; Comprate el helado de crema")
    alert("Y te sobran"+ (dineroCofla- 1));
}
else if(dineroCofla >= 1.6 && dineroCofla < 1.7){
    alert("Cofla; Comprate el helado de pera")
    alert("Y te sobran"+ (dineroCofla - 1.6));
}
else if(dineroCofla >= 1.7 && dineroCofla < 1.8){
    alert("Cofla; Comprate el helado de coco")
    alert("Y te sobran"+ (dineroCofla- 1.7));
}
else if(dineroCofla >= 1.8 && dineroCofla < 2.9){
    alert("Cofla; Comprate el helado de mani")
    alert("Y te sobran"+ (dineroCofla- 1.8));
}
else if(dineroCofla >=2.9){
    alert("Cofla; Comprate el helado de confites o el pote de 1/4Kg");
    alert("Y te sobran"+ (dineroCofla- 2.9));
}else{
    alert("Cofla; Lo siento, pobre de damier, no te alcanza para ningun helado")
}

if(dineroRoberto >= 0.6 && dineroRoberto < 1){
    alert("Roberto; Comprate el helado de agua")
    alert("Y te sobran"+ (dineroRoberto - 0.6));
}
else if(dineroRoberto >= 1 && dineroRoberto < 1.6){
    alert("Roberto; Comprate el helado de crema")
    alert("Y te sobran"+ (dineroRoberto - 1));
}
else if(dineroRoberto >= 1.6 && dineroRoberto < 1.7){
    alert("Roberto; Comprate el helado de pera")
    alert("Y te sobran"+ (dineroRoberto - 1.6));
}
else if(dineroRoberto >= 1.7 && dineroRoberto < 1.8){
    alert("Roberto; Comprate el helado de coco")
    alert("Y te sobran"+ (dineroRoberto - 1.7));
}
else if(dineroRoberto >= 1.8 && dineroRoberto < 2.9){
    alert("Roberto; Comprate el helado de mani")
    alert("Y te sobran"+ (dineroRoberto - 1.8));
}
else if(dineroRoberto >=2.9){
    alert("Roberto; Comprate el helado de confites o el pote de 1/4Kg");
    alert("Y te sobran"+ (dineroRoberto - 2.9));
}else{
    alert("Roberto; Lo siento, pobre de damier, no te alcanza para ningun helado")
}

if(dineroPedro >= 0.6 && dineroPedro < 1){
    alert("Pedro; Comprate el helado de agua")
    alert("Y te sobran"+ (dineroPedro - 0.6));
}
else if(dineroPedro >= 1 && dineroPedro < 1.6){
    alert("Pedro; Comprate el helado de crema")
    alert("Y te sobran"+ (dineroPedro - 1));
}
else if(dineroPedro >= 1.6 && dineroPedro < 1.7){
    alert("Pedro; Comprate el helado de pera")
    alert("Y te sobran"+ (dineroPedro - 1.6));
}
else if(dineroPedro >= 1.7 && dineroPedro < 1.8){
    alert("Pedro; Comprate el helado de coco")
    alert("Y te sobran"+ (dineroPedro - 1.7));
}
else if(dineroPedro >= 1.8 && dineroPedro < 2.9){
    alert("Pedro; Comprate el helado de mani")
    alert("Y te sobran"+ (dineroPedro - 1.8));
}
else if(dineroPedro >=2.9){
    alert("Pedro; Comprate el helado de confites o el pote de 1/4Kg");
    alert("Y te sobran"+ (dineroPedro - 2.9));
}else{
    alert("Pedro; Lo siento, pobre de damier, no te alcanza para ningun helado")
}
 //Resumido o Recursivo
const definirCompra = (n)=>{
    let din = prompt('Dinero de ${n}');
    if (din >= 0.6 && din < 1) return (`${n}: helado de agua`);
    if (din >= 1 && din < 1.6) return (`${n}: helado de agua`);
    if (din >= 1.6 && din < 1.7) return (`${n}: helado de agua`);
    if (din >= 1.7 && din < 1.8) return (`${n}: helado de agua`);
    if (din >= 1.8 && din < 2.9) return (`${n}: helado de agua`);
    if (din >= 2.9) return ('${n}: helado de agua');
    else return ('${n}: No te alcanza para ningun helado pobre de damier')
}
console.log(definirCompra("Cofla"));
console.log(definirCompra("Roberto"));
console.log(definirCompra("Pedro"));