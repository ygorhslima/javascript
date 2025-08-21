const f_tipoMilitar = document.querySelector("#f_tipoMilitar");
const f_tipoNormal = document.querySelector("#f_tipoNormal");
const f_nome = document.querySelector("#f_nome")
const f_blindagem = document.querySelector("#f_blindagem");
const f_municao = document.querySelector("#f_municao");
const f_portas = document.querySelector("#f_portas")

const btn_addCarro = document.querySelector("#btn_addCarro")
const carros = document.querySelector("#carros")

var a_carros=[]

f_tipoMilitar.addEventListener("click",(evt)=>{
    f_blindagem.removeAttribute("disabled")
    f_municao.removeAttribute("disabled")
})

f_tipoNormal.addEventListener("click",(evt)=>{
    f_blindagem.value=0
    f_municao.value=0
    f_blindagem.setAttribute("disabled","disabled")
    f_municao.setAttribute("disabled","disabled")
})

btn_addCarro.addEventListener("click",()=>{
    if(f_tipoNormal.checked){
        const c1 = new Carro(f_nome.value, f_portas.value)
        a_carros.push(c1)
    }else{
        const c2 = new Militar(f_nome.value, f_portas.value, f_portas.value, f_blindagem.value, f_municao.value)
        a_carros.push(c2)
    }
    GerenciarExibicaoCarros()
})

const GerenciarExibicaoCarros=()=>{
    carros.innerHTML = ""
    a_carros.forEach((c)=>{
        const div = document.createElement("div")
        div.setAttribute("class","carro")
        div.innerHTML = `
            Nome: ${c.nome}<br>
            Portas: ${c.portas}<br>
            Blindagem: ${c.blindagem}<br>
            Munição: ${c.municao} 
        
        `
        carros.appendChild(div)
    })
}

class Carro{
    constructor(nome, portas){
        this.nome = nome;
        this.portas = portas;
    }
}

class Militar extends Carro{
    constructor(nome, portas, blindagem, municao){
        super(nome,portas)
        this.blindagem = blindagem
        this.municao = municao
    }
}

