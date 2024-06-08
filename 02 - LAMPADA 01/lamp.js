var ligarL = document.getElementById('ligarL');
var desligarL = document.getElementById('desligarL');
var trocarL = document.getElementById('trocarL');
var lamp = document.getElementById('lamp')


function ligar(){
    lamp.src = 'img/ligada.jpg';
}
function desligar(){
    lamp.src = 'img/desligada.jpg'
}
function quebrar(){
    lamp.src = 'img/quebrada.jpg'
    ligarL.disabled = true;
    desligarL.disabled = true;
}
function trocar(){
    lamp.src = 'img/desligada.jpg'
    ligarL.disabled = false;
    desligarL.disabled = false;
}