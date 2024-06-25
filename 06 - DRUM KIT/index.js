'use strict'; //ele deixa nosso codigo mais restritos e impede alguns erros comuns de ser levados mais adiante no codigo.

const sons = {
    'A': 'boom.wav',
    'S': 'clap.wav',
    'D': 'hihat.wav',
    'F': 'kick.wav',
    'G': 'openhat.wav',
    'H': 'ride.wav',
    'J': 'snare.wav',
    'K': 'tink.wav',
    'L': 'tom.wav'
}


const criarDiv = (texto) => { //Essa função é especifica para criar a nossa div dinamicamente
    const div = document.createElement('div');
    div.classList.add('key');
    div.textContent = texto;
    div.id = texto;
    document.getElementById('container').appendChild(div);
}

const exibir = (sons) =>{
    Object.keys(sons).forEach(criarDiv);
}

const tocarSom = (letra) => {
    const audio = new Audio(`sounds/${sons[letra]}`);
    audio.play();
}
const adicionarEfeito = (letra) => {
    document.getElementById(letra).classList.add('active');
}
const removerEfeito = (letra) => {
    const div = document.getElementById(letra);
    const removeActive = () => {
        div.classList.remove('active');
    }
    div.addEventListener('transitionend', removeActive);
}

const ativarDiv = (evento)=> {
   
    const letra =  evento.type == 'click' ? evento.target.id : evento.key.toUpperCase();
    
    const letraPermitida = sons.hasOwnProperty(letra);
    if(letraPermitida){
        adicionarEfeito(letra);
        tocarSom(letra);
        removerEfeito(letra);
    }
    
}

exibir(sons);;

document.getElementById('container').addEventListener('click', ativarDiv);

window.addEventListener('keydown', ativarDiv);