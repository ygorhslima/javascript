const carro=document.getElementById("carro")
const btn_esquerda=document.getElementById("btn_esquerda")
const btn_direita=document.getElementById("btn_direita")
const btn_parar = document.getElementById
("btn_parar")

var anima = null
let tamMax = null

console.log(tamMax)

function init(){
    carro.style="position:relative; left:0px; width:100px"
    tamMax=window.innerWidth - parseInt(carro.style.width);
}

/*função que vai receber a direção para o objeto, se vai para direita ou esquerda*/
function move(direcao){ 
    if(direcao > 0){ // direita
        if(parseInt(carro.style.left) <= tamMax){
            carro.style.left = parseInt(carro.style.left) + (10*direcao) + "px"
            anima=setTimeout(move, 20, direcao) 
        }else{
            clearTimeout()
        }
    }

    else if(direcao < 0){ // esquerda
        if(parseInt(carro.style.left) >= 0){
            carro.style.left = parseInt(carro.style.left) + (10*direcao) + "px"
            anima=setTimeout(move, 20, direcao) 
        }else{
            clearTimeout()
        }
    }
    console.log(anima)
}


btn_esquerda.addEventListener("click",()=>{
    clearTimeout(anima)
    move(-1)
})
btn_direita.addEventListener("click",()=>{
    clearTimeout(anima)
    move(1)
})
btn_parar.addEventListener("click",()=>{
    clearTimeout(anima)
})

window.addEventListener("load",init())

// toda vez que eu redimensionar na tela vai ser recalculado o tamanho máximo e jogar na variável do tamanho Máximo 
window.addEventListener("resize",()=>{
    tamMax=window.innerWidth - parseInt(carro.style.width)
})