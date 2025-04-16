// CÓDIGO ESTUDADO NO CANAL DO CFB CURSOS

// Class Bola
/*
    quando adicionamos uma bola ela tem atributos em comum
    -> cor diferente
    -> velocidade diferente
    -> direções diferentes
    -> tamanhos diferentes
*/ 


 // cada bolinha que instanciar na tela tem que ter um id diferente, pois cada bolinha será controlado por um objeto Bola instanciada no array Bolas, tenho que saber
        /*
            -> qual meu ID;
            -> qual meu palco;
            -> onde instanciar;
            
        */

const palco = document.getElementById('palco')
const num_objeto  = document.getElementById('num_objetos')
const txt_qtde  = document.getElementById('txt_qtde')
const btn_add  = document.getElementById('btn_add')
const btn_remover  = document.getElementById('btn_remover')

let larguraPalco = palco.offsetWidth
let alturaPalco = palco.offsetHeight
// aqui é onde vou adicionar os objetos bolas dentro desta array
let bolas = []
let numBolas = 0

class Bola {
    constructor(arrayBolas, palco){
        //vamos definir o tamanho da bolinha, vamos gerar os tamanhos automaticamente com o gerador random da classe Math,e o floor permite o arredondamento
        this.tam = Math.floor(Math.random()*15)+10
        //Cores RBG gerando automaticamente
        this.r = Math.floor(Math.random()*255)
        this.g = Math.floor(Math.random()*255)
        this.b = Math.floor(Math.random()*255)

        /* definindo as posições dessas bolinhas, pois a geração delas serão aleatórias*/ 
        /*
            aqui precisamos saber o tamanho máximo da tela, e isso vem da largura do palco, isto é vai de 0 até a largura do palco, só que menos o tamanho da bolinha
        */
        this.px = Math.floor(Math.random()*(larguraPalco-this.tam))
        this.py = Math.floor(Math.random()*(alturaPalco-this.tam))
        this.velx = Math.floor(Math.random()*2)+0.5
        this.vely = Math.floor(Math.random()*2)+0.5
        this.dirx = (Math.random()*10) > 5 ? 1 : -1
        this.diry = (Math.random()*10) > 5 ? 1 : -1
        this.palco = palco
        this.arrayBolas = arrayBolas
        this.id = Date.now()+"_"+Math.floor(Math.random*10000000000)
        this.desenhar()
        this.controle=setInterval(this.controlar, 10)
        this.eu=document.getElementById(this.id)
        num_objeto.innerHTML = numBolas 
    }

    // função para retornar a posição da bolinha

    minhaPos=()=>{
        return this.arrayBolas.indexOf(this)
    }

    remover=()=>{
        clearInterval(this.controle)
        bolas = bolas.filter((b)=>{
            if(b.id != this.id){
                return b
            }
        })
        this.eu.remove()
        numBolas--
        num_objeto.innerHTML = numBolas
    }

    // vai desenhar a bolinha no DOM
    desenhar=()=>{
        const div = document.createElement("div")
        div.setAttribute("id",this.id)
        div.setAttribute("class","bola")
        div.setAttribute("style",`
            left:${this.px}px; 
            top:${this.py}px; 
            width:${this.tam}px;
            height:${this.tam}px;
            background-color:rgb(${this.r}, ${this.g}, ${this.b});
        `)
        this.palco.appendChild(div)
    }

    /*
        o controlar vai precisar do método da colisao_bordas e vai ver se encostou na borda
        se a bolinha encostou na borda, ele tem que mudar a direção da posição x para -1
    */

    controle_bordas=()=>{
        if(this.px + this.tam >= larguraPalco){
            this.dirx=-1
        }else if(this.px <= 0){
            this.dirx=1
        }

        if(this.py + this.tam >= alturaPalco){
            this.diry=-1
        } else if (this.py <= 0){
            this.diry = 1
        }
    }

    // método para controlar a movimentação das bolinhas
    // independente da posição da bolinha, ela terá que ser atualizada, então a posição cada vez que ele chama o controlar ele vai pegar a posição e atualizar paraa a nova posição
    controlar=()=>{
        this.controle_bordas()
        // a posição x vai se atualizar somando a direção x multiplicado pela velocidade do x, o mesmo da posição y
        this.px+=this.dirx*this.velx
        this.py+=this.diry*this.vely
        this.eu.setAttribute("style",`
            left:${this.px}px; 
            top:${this.py}px; 
            width:${this.tam}px;
            height:${this.tam}px;
            background-color:rgb(${this.r}, ${this.g}, ${this.b});
        `)
        if((this.px > larguraPalco) || (this.py > alturaPalco))
        {
            this.remover()
        }
    }
}


// esse evento vai disparar quando eu redimensionar a janela do navegador
window.addEventListener("resize",(evt)=>{
    let larguraPalco = palco.offsetWidth
    let alturaPalco = palco.offsetHeight
    console.log(larguraPalco)
})

btn_add.addEventListener("click",(evt)=>{
    /*para obter as quantidades de bolinhas para a tela, é preciso adiciona-los a partir do input do #txt_qtde*/
    const qtde = txt_qtde.value 
    for(let i=0; i<qtde;i++){
        // instanciar novas bolinhas
        bolas.push(new Bola(bolas,palco))
    }
})

btn_remover.addEventListener("click",(evt)=>{
    /*
    para remover é preciso saber que as bolinhas serão adicionadas na array de bolas, criar um objeto e adicionar na array
    basta percorrer nessa array e percorrer objeto por objeto
    */
    bolas.map((b)=>{
        // Remover a bolinha
        b.remover()
    })
})