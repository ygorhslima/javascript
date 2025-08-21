const carro=document.getElementById("carro")
const btn_esquerda=document.getElementById("btn_esquerda")
const btn_direita=document.getElementById("btn_direita")
const btn_parar = document.getElementById("btn_parar")

function init(){
    carro.style="position:relative; left:0px"
}

/* 
    função que vai receber a direção para o objeto, se vai para direita ou esquerda
*/
function move(direcao){ 
    carro.style.left = parseInt(carro.style.left) + (10*direcao) + "px"
}

let anima = null
btn_esquerda.addEventListener("click",()=>{
    clearInterval(anima) // limpo o intervalo atual para não entrar em conflito
    anima = setInterval(move, 20, -1) // passando a função, o intervalo, ou seja o tempo em milisegundos e o argumento da função, que neste caso é a direção (1 para direita, -1 para esquerda)
})

btn_direita.addEventListener("click",()=>{
    clearInterval(anima)
    anima = setInterval(move, 20, 1)
})


btn_parar.addEventListener("click",()=>{
    clearInterval(anima)
})

window.onload = init
