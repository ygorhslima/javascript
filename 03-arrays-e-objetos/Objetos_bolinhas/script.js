// todo o palco que é onde vai estar as bolinhas
const palco = document.getElementById("palco");

// quantifica quantas bolinhas tem no palco
const num_objetos = document.getElementById("num_objetos");

// txt para adicionar as quantidades de bolinha
const txt_qtde = document.getElementById("txt_qtde");

// botões de adicionar a remover
const btn_add = document.getElementById("btn_add");
const btn_remover = document.getElementById("btn_remover");

// variáveis de controle da largura e altura
let larguraPalco = palco.offsetWidth; // offsetWidth:  retorna a largura total de um elemento HTML em pixels,
let alturaPalco = palco.offsetWidth;
// variável que vai contar quantas bolas estão sendo renderizado
let numBola = 0;

// os objetos bolas que serão criados serão adicionados dentro da array bolas
let bolas = [];

class Bola{
    constructor(arrayBolas, palco){
        this.tamanho=Math.floor(Math.random()*15)+10;
       
        // cores RGB
        this.r=Math.floor(Math.random()*255);
        this.g=Math.floor(Math.random()*255);
        this.b=Math.floor(Math.random()*255);
        
        //atributos de posição
        this.posx = Math.floor(Math.random()*larguraPalco-this.tamanho);
        this.posy = Math.floor(Math.random()*alturaPalco-this.tamanho);
        
        //atributos de velocidade
        this.velx = Math.floor(Math.random()*2) + 0.5;
        this.vely = Math.floor(Math.random()*2) + 0.5;

        //atributos de direção
        // as direções verificam o valor sorteado de 0 a 10 e verificam se o valor é maior que 5, se for retorna 1, caso contrário -1 
        this.dirx = (Math.random()*10) > 5 ? 1 : -1;
        this.diry = (Math.random()*10) > 5 ? 1 : -1;

        //passando o palco e o array das bolas
        this.arrayBolas = arrayBolas;
        this.palco = palco;

        //toda bolinha terá um id diferente tendo um timestamp mais um número que Math.random() vai sortear
        this.id = Date.now()+"_"+Math.floor(Math.random()*1000000000000);

        // criando o desenho
        this.desenhar();

        this.controle = setInterval(this.controlar, 10);
        // relacionando a bolinha no dom com o objeto que vou criar
        this.eu=document.getElementById(this.id);

        // contando quantas bolas estão sendo criadas +1 e mostrado no html pelo num_objetos
        numBola++;
        num_objetos.innerHTML = numBola;
    }
    // método para desenhar a bolinha no DOM
    desenhar=()=>{
        const div = document.createElement("div")
        div.setAttribute("id",this.id);
        div.setAttribute("class","bola");
        div.setAttribute("style",`
            left: ${this.posx};
            top: ${this.posy};
            width: ${this.tamanho};
            height:${this.tamanho};
            background-color: rgb(${this.r}, ${this.g}, ${this.b})
        `)
        this.palco.appendChild(div)
    }
    // método para saber a posição da bolinha
    minhaPosicao=()=>{
        return this.arrayBolas.indexOff(this);
    }
    // método para remover a bolinha
    remover=()=>{
        // limpar o intervalo
        clearInterval(this.controle);
        // remover do arrayBolas
        bolas = bolas.filter((bolinha)=>{
            if(bolinha.id != this.id){
                return bolinha;
            }
        });
        // remover do DOM
        this.eu.remove(); // remove a bolinha filho
        // atualizando o número de bolas
        numBola--;
        num_objetos.innerHTML = numBola;
    }
    // método para controlar a movimentação da bolinha, atualizar a posição dela dentro do DOM
    controlar=()=>{

    }
}


//quando redimensionar a tela será disparado um evento
window.addEventListener("resize",()=>{

})

btn_add.addEventListener("click",()=>{
    const quantidadeBola = txt_qtde.value
    for(let i = 0; i < quantidadeBola; i++){
        //Instanciar as bolinhas
    }
})
// limpando a array de bolas, percorrendo ele e removendo objeto por objeto
btn_remover.addEventListener("click",()=>{
    bolas.map((el)=>{
        // função para remover a bolinha
    })
})