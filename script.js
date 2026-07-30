// ================================
// CANVAS
// ================================

const canvas = document.getElementById("tela");
const ctx = canvas.getContext("2d");

const tamanho = 20;

// ================================
// COBRINHA
// ================================

let cobra = [

    {
        x:200,
        y:200
    }

];

let direcao = "RIGHT";

let comida = {

    x:100,
    y:100

};

// ================================
// DESENHAR
// ================================

function desenhar(){

    ctx.fillStyle = "black";

    ctx.fillRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    ctx.fillStyle = "red";

    ctx.fillRect(
        comida.x,
        comida.y,
        tamanho,
        tamanho
    );

    ctx.fillStyle = "lime";

    cobra.forEach(parte=>{

        ctx.fillRect(

            parte.x,

            parte.y,

            tamanho,

            tamanho

        );

    });

}

// ================================
// MOVIMENTAÇÃO
// ================================

function atualizar(){

    let cabeca = {

        ...cobra[0]

    };

    switch(direcao){

        case "RIGHT":

            cabeca.x += tamanho;

        break;

        case "LEFT":

            cabeca.x -= tamanho;

        break;

        case "UP":

            cabeca.y -= tamanho;

        break;

        case "DOWN":

            cabeca.y += tamanho;

        break;

    }

    if(cabeca.x >= canvas.width)
        cabeca.x = 0;

    if(cabeca.x < 0)
        cabeca.x = canvas.width - tamanho;

    if(cabeca.y >= canvas.height)
        cabeca.y = 0;

    if(cabeca.y < 0)
        cabeca.y = canvas.height - tamanho;

    cobra.unshift(cabeca);

    if(

        cabeca.x == comida.x &&

        cabeca.y == comida.y

    ){

        comida.x =
            Math.floor(Math.random()*20)*20;

        comida.y =
            Math.floor(Math.random()*20)*20;

    }else{

        cobra.pop();

    }

    desenhar();

}

setInterval(

    atualizar,

    150

);

// ================================
// RECONHECIMENTO DE VOZ
// ================================

const SpeechRecognition =

window.SpeechRecognition ||

window.webkitSpeechRecognition;

if(!SpeechRecognition){

    alert("Seu navegador não suporta reconhecimento de voz.");

}

const recognition = new SpeechRecognition();

recognition.lang = "pt-BR";

recognition.continuous = true;

recognition.interimResults = true;

// ================================
// BOTÃO
// ================================

document
.getElementById("btnMicrofone")
.addEventListener(

"click",

function(){

    recognition.start();

    document
    .getElementById("status")
    .innerHTML =
    "🎤 Microfone ligado";

}

);

// ================================
// QUANDO RECONHECER UMA FALA
// ================================

recognition.onresult = (event) => {

    const resultado = event.results[event.resultIndex];

    const comando = resultado[0].transcript
        .toLowerCase()
        .trim();

    if (!resultado.isFinal) {
        // Opcional: já executar antes da frase terminar
    }

    console.log(comando);

    switch (comando) {
        case "direita":
            direcao = "RIGHT";
            break;

        case "esquerda":
            direcao = "LEFT";
            break;

        case "cima":
            direcao = "UP";
            break;

        case "baixo":
            direcao = "DOWN";
            break;
    }
};

// ================================
// REINICIA O MICROFONE
// ================================

recognition.onend = function(){

    recognition.start();

};

desenhar();