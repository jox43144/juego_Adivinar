
function intentoUsuario() {
    let numeroUsuario = parseInt(document.getElementById('numeroUsuario').value);
    if (numeroUsuario === numeroSecreto) {
        ponerTexto('p', `Acertaste el numero en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        intentos++;
        limpiar();
        if (numeroUsuario > numeroSecreto) {
            ponerTexto('p', 'Incorrecto, el numero secreto es menor');
        } else {
            ponerTexto('p', 'Incorrecto, el numero secreto es mayor');
        }

    }
}
function ponerTexto(Elemento, texto) {
    let v1 = document.querySelector(Elemento);
    v1.innerHTML = texto;
}
function Aleatorio() {
    let numero = Math.floor((Math.random() * 10)) + 1;
if(listaNumerosUsados.length == 10){
ponerTexto('p','Ya se sortearon todos los numeros posibles');
}else{
    if (listaNumerosUsados.includes(numero)) {
        return Aleatorio;
    } else {
        listaNumerosUsados.push(numero);
        return numero;
    }
}
}
function limpiar() {
    document.querySelector('#numeroUsuario').value = '';

}
function reiniciarJuego() {
    limpiar();
    inicializar();
    document.getElementById('reiniciar').setAttribute('disabled', 'true');


}
function inicializar() {
    ponerTexto('p', 'Escoge un numero del 1 al 10');
    ponerTexto('h1', 'Adivina el numero secreto');
    numeroSecreto = Aleatorio();
    intentos = 1;
}

let numeroSecreto;
let intentos;
let listaNumerosUsados = [];
inicializar();