var On_Off = document.getElementById('On-Off');
var trocarL = document.getElementById('trocarL');
var lamp = document.getElementById('lamp');


function OnOff(){
    if(On_Off.value === 'On'){
        lamp.src = 'img/ligada.jpg';
        On_Off.value = 'Off';
    }else{
        lamp.src = 'img/desligada.jpg';
        On_Off.value = 'On';
    }
}
function quebrar(){
    lamp.src = 'img/quebrada.jpg'
    On_Off.disabled = true;
}
function trocar(){
    lamp.src = 'img/desligada.jpg'
    On_Off.value = 'On';
    On_Off.disabled = false;
}