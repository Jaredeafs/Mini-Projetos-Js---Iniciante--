function calcular(){
    //pegando valores dos input
    var nome = document.getElementById('tnome').value;
    var altura = parseFloat(document.getElementById('taltura').value.trim());
    var peso = parseFloat(document.getElementById('tpeso').value.trim());

    //Validando campo dos input
    var form = document.getElementById('dados'); //pegando dados do form
    var inputs = document.querySelectorAll('input'); // pegando dados de todos os input
    var formValido = true; //iniciando o formulario como verdadeiro

    inputs.forEach(function(input){ // Aqui ele busca em todos os inputs
        if(input.value.trim() == ""){
            formValido = false;
            input.style.borderColor = 'red';
        }else{
            input.style.borderColor = '';
        }
    });
        if(formValido){//se verdadeiro
            var resultado = document.getElementById('res'); //obtem dados da div res
            var imc = peso / Math.pow(altura, 2) // calculo IMC

            // Para mostrar o resultado vamos usar um template string "${}" para pegar as variáveis e também um "toFixed()" para usar duas casas decimais após a vírgula 
            if(imc < 18.5){
                resultado.innerHTML = `
                <strong>Nome:</strong> ${nome} <br/>
                <p><strong>IMC</strong>: ${imc.toFixed(2)}</p>

                <br/>Olá ${nome}.<br/>
                Você possui um imc de ${imc.toFixed(2)}. Por tanto sua classificação na tabela do IMC é de <strong>Magreza</strong> de grau 0.
            `;
            }else if(imc >= 18.5 && imc <=24.9){
                resultado.innerHTML = `
                <strong>Nome:</strong> ${nome} <br/>
                <p><strong>IMC</strong>: ${imc.toFixed(2)}</p>

                <br/>Olá ${nome}.<br/>
                Você possui um imc de ${imc.toFixed(2)}. Por tanto sua classificação na tabela do IMC é de <strong>Peso normal</strong> de grau 0.
            `;
            }else if (imc >= 25 && imc <= 29.9){
                resultado.innerHTML = `
                <strong>Nome:</strong> ${nome} <br/>
                <p><strong>IMC</strong>: ${imc.toFixed(2)}</p>

                <br/>Olá ${nome}.<br/>
                Você possui um imc de ${imc.toFixed(2)}. Por tanto sua classificação na tabela do IMC é de <strong>Sobrepeso</strong> de grau 0.
            `;
            }else if( imc >= 30 && imc <= 34.9){
                resultado.innerHTML = `
                <strong>Nome:</strong> ${nome} <br/>
                <p><strong>IMC</strong>: ${imc.toFixed(2)}</p>

                <br/>Olá ${nome}.<br/>
                Você possui um imc de ${imc.toFixed(2)}. Por tanto sua classificação na tabela do IMC é de <strong>Obesidade</strong> de grau I.
            `;
            }else if (imc >= 35 && imc <= 39.9){
                resultado.innerHTML = `
                <strong>Nome:</strong> ${nome} <br/>
                <p><strong>IMC</strong>: ${imc.toFixed(2)}</p>

                <br/>Olá ${nome}.<br/>
                Você possui um imc de ${imc.toFixed(2)}. Por tanto sua classificação na tabela do IMC é de <strong>Obesidade Grave</strong> de grau II.
            `;
            }else if(imc >= 40){
                resultado.innerHTML = `
                <strong>Nome:</strong> ${nome} <br/>
                <p><strong>IMC</strong>: ${imc.toFixed(2)}</p>

                <br/>Olá ${nome}.<br/>
                Você possui um imc de ${imc.toFixed(2)}. Por tanto sua classificação na tabela do IMC é de <strong>Obesidade Mórbida</strong> de grau III.
            `;
            }
            
        }else{
            //se der (formValido) == falso
            alert('[ERRO]! Os campos precisam ser prenchidos!')
        }

}

function limpar(){
    //Pegando os dados dos campos de entrada
    document.getElementById('tnome').value = '';
    document.getElementById('taltura').value = '';
    document.getElementById('tpeso').value = '';

    // Limpando a mensagem de resultado
    document.getElementById('res').innerHTML = '';

    // Removendo as bordas vermelhas se houver
    var inputs = document.querySelectorAll('input');
    inputs.forEach(function(input){
        input.style.borderColor = '';
    });
}