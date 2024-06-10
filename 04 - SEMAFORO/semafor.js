let semaforo = document.getElementById('i_desligado');  //imagem
let estadoAtual = 'desligado'; //estado inicial do semaforo
let intervalo;  //para armazenar o intervalo
let autoMode = false;   // Variável para verificar se o modo automático está ativo
function vermelho(){
    if(!autoMode){
        clearInterval(intervalo); // parar o loop automático do intervalo
    }else{
        autoMode = false;
    }
    semaforo.src = 'img/vermelho.png';
    estadoAtual = 'vermelho';
}
function amarelo(){
    if(!autoMode){
        clearInterval(intervalo);
    }else{
        autoMode = false;
    }
    semaforo.src = 'img/amarelo.png';
    estadoAtual = 'amarelo';
}
function verde(){
    if(!autoMode){
        clearInterval(intervalo);
    }else{
        autoMode = false;
    }
    semaforo.src = 'img/verde.png';
    estadoAtual = 'verde';
}
function off(){
        clearInterval(intervalo);
        autoMode = false;
    semaforo.src = 'img/desligado.png'
    estadoAtual = 'desligado'
}
//Vamos fazer uma função para ser responsavel pela mudança de cor de forma ciclica.
function mudarCor(){
    autoMode = true; 
    if(estadoAtual === 'vermelho'){
        amarelo();
    }else if(estadoAtual === 'amarelo'){
        verde();
    }else if (estadoAtual === 'verde' || estadoAtual === 'desligado'){
        vermelho();
    }
}
//Aqui vamos ativar o modo automatico
function auto(){
   if(!autoMode){ // se autoMode = false -- // Garante que não iniciará múltiplos intervalos
        if(estadoAtual === 'desligado'){ // Inicializa no vermelho se estiver desligado
            vermelho(); 
        }
      //se autoMode off ele vai iniciar o intervalo
      intervalo = setInterval(mudarCor, 3000); // Muda a cor a cada 3 segundos
      autoMode = true;
    }
}

