// Ocultando os elementos da 2° pergunta!
document.getElementById("input2").style.display = "none";
document.getElementById("input3").style.display = "none";
document.getElementById("proximo2").style.display = "none";
document.getElementById("proximo3").style.display = "none";

// Declaração de variaveis globais
var nomeInserido 
var alturaInserida
var pesoInserido 
var imc
var classificacao

function nomeClick () {
    // Armazenando os dados 
    nomeInserido = document.getElementById("input1").value
    
    // Retornando a resposta concatenando o nome inserido
    document.getElementById("titulo1").innerHTML = "Seja bem vindo(a) " + nomeInserido + " !"
    document.getElementById("frase").innerHTML = nomeInserido + " digite a sua altura em centimetros: "

    // Ocultando o outros itens
    document.getElementById("input1").style.display = "none";
    document.getElementById("proximo1").style.display = "none";
    
    // Retornando | Alinhando os elementos que estavam ocultos
    document.getElementById("input2").style.display = "block";
    document.getElementById("input2").style.margin = "0 auto";
    document.getElementById("input2").style.position = "static";

    document.getElementById("proximo2").style.display = "block";
    document.getElementById("proximo2").style.margin = "0 auto";
    document.getElementById("proximo2").style.position = "static";
}

function alturaClick () {
    // Armazenando os dados 
    alturaInserida = document.getElementById("input2").value
    alturaInserida = parseInt(alturaInserida)

    // Retornando a resposta concatenando o nome inserido
    document.getElementById("frase").innerHTML = nomeInserido + " digite o seu peso: "

    // Ocultando o outros itens
    document.getElementById("input2").style.display = "none";
    document.getElementById("proximo2").style.display = "none";

    // Retornando | Alinhando os elementos que estavam ocultos
    document.getElementById("input3").style.display = "block";
    document.getElementById("input3").style.margin = "0 auto";
    document.getElementById("input3").style.position = "static";

    document.getElementById("proximo3").style.display = "block";
    document.getElementById("proximo3").style.margin = "0 auto";
    document.getElementById("proximo3").style.position = "static";
}

function pesoClick () {
    // Armazenando os dados 
    pesoInserido = document.getElementById("input3").value
    pesoInserido = parseInt(pesoInserido)

    // Ocultando o outros itens
    document.getElementById("input3").style.display = "none";
    document.getElementById("proximo3").style.display = "none";
    document.getElementById("titulo1").style.display = "none";
    
    // Retornando o IMC concatenado com o nome

    alturaInserida = alturaInserida / 100

    imc = (pesoInserido / alturaInserida **2)
        // Condição para o imc
    if (imc < 16 ) {
        classificacao = "Baixo peso muito grave"
    } else if (imc < 16.99) {
        classificacao = "Baixo peso grave"
    } else if (imc < 18.49) {
        classificacao ="Baixo peso"
    } else if (imc < 24.99) {
        classificacao ="Peso normal"
    } else if (imc < 29.99) {
        classificacao ="Sobrepeso"
    } else if (imc < 34.99) {
        classificacao ="Obesidade grau I"
    } else if (imc < 39.99) {
        classificacao ="Obesidade grau II"
    } else {
        classificacao ="Obesidade grau III"
    }
    
    document.getElementById("frase").innerHTML = nomeInserido + " você possui o índice de massa corporal igual a " 
    + imc + ", sendo classificado como: " + classificacao
    
}
