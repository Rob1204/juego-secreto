let numeroSecreto=0;
let intentos=1;
let listaNumeros=[];
let numeroMaximo=3;

function asignarTextoElemento (elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML=texto;

}

function verificarIntento(){
    let numeroDeUsuario=parseInt(document.getElementById('valorUsuario').value);

    if (numeroDeUsuario===numeroSecreto){
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos===1) ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');

    } else {
        //el usuario no acertó.
        if (numeroDeUsuario>numeroSecreto){
            asignarTextoElemento('p', 'El número secreto es menor');
        }else{
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++
        limpiarCaja();
    }
    return;
}
console.log(numeroSecreto);

function limpiarCaja(){
    document.querySelector('#valorUsuario').value='';
}

function generarNumeroSecreto(){
    let numeroGenerado=Math.ceil(Math.random()*numeroMaximo);

    console.log(numeroGenerado);
    console.log(listaNumeros);
    //si ya sorteamos todos los números
    if(numeroMaximo==listaNumeros.length){
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    }else{
        //evalúa si el número generado está en la lista o no
        if(listaNumeros.includes(numeroGenerado)){
            return generarNumeroSecreto();
        } else {
            listaNumeros.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto=generarNumeroSecreto();
    intentos=1;
}

function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled','true');

}

condicionesIniciales();
