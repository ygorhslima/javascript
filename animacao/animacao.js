const carro = document.getElementById("carro");
const btn_play = document.getElementById("btn_play");
const btn_parar = document.getElementById("btn_parar");

let anima = null;
let tamanho_max = null;
let direcao = 1; // 1 para direita, -1 para esquerda

const init = () => {
    carro.style = "position:relative; left:0px; width:100px;";
    tamanho_max = window.innerWidth - parseInt(carro.style.width);
};

const move = () => {
    const posicaoAtual = parseInt(carro.style.left);

    if (posicaoAtual >= tamanho_max) {
        direcao = -1; // Inverte para esquerda
    } else if (posicaoAtual <= 0) {
        direcao = 1; // Inverte para direita
    }

    carro.style.left = posicaoAtual + (10 * direcao) + "px";
    anima = setTimeout(move, 20);
};

btn_play.addEventListener("click", () => {
    if (!anima) {
        move();
    }
});

btn_parar.addEventListener("click", () => {
    if (anima) {
        clearTimeout(anima);
        anima = null;
    }
});

window.addEventListener("load", init);

// Recalcula o tamanho máximo ao redimensionar a janela
window.addEventListener("resize", () => {
    tamanho_max = window.innerWidth - parseInt(carro.style.width);
});

window.addEventListener("keydown",(evt)=>{
    if(evt.code === "ArrowUp"){
        carro.style.width = parseInt(carro.style.width)+10+"px"
        carro.style.height = parseInt(carro.style.height)+10+"px"
        carro.style.backgroundColor = "red"  
    }
    if(evt.code === "ArrowDown"){
        carro.style.width = parseInt(carro.style.width)-10+"px"
        carro.style.height = parseInt(carro.style.height)-10+"px"
        carro.style.backgroundColor = "yellow"   
    }
    tamanho_max=window.innerWidth - parseInt(carro.style.width)
})