let listaUno=[];
let listaDos=[];
let resultados=[];
contador=1;
while (contador<6){
    listaUno.push(parseInt(prompt(`Introduce el valor número ${contador} de la lista uno`)));
    contador++
}
contador=1;
while (contador<6){
    listaDos.push(parseInt(prompt(`Introduce el valor número ${contador} de la lista dno`)));
    contador++
}
contador=1;
while (contador<6){
    resultados.push(listaUno[contador-1]+listaDos[contador-1])
    contador++
}
console.log(listaUno);
console.log(listaDos);
console.log(resultados);









