let resultado=1;
numero=prompt("¿Qué tabla quieres calcular?");
contador=1;

while (contador<=10){
    tabla(numero, contador);
    contador++;
}

function tabla (numero, contador){
    resultado=numero*contador;
    console.log(resultado);
}


