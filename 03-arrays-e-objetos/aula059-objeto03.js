let pessoas = []

class Pessoa{
    constructor(nome,idade){
        this.nome = nome
        this.idade = idade
    }
    getNome(){
        return this.nome
    }
    setNome(nome){
        this.nome = nome 
    }
    getIdade(){
        return this.idade 
    }
    setIdade(idade){
        this.idade = idade 
    }
    
}


const btn_add = document.getElementById("btn_add")
const res = document.querySelector(".res")

const addPessoa = () =>{
    pessoas.map((pessoa)=>{
        const div = document.createElement("div")
        res.appendChild(div)
        res.innerHTML = `
            nome: ${pessoa.getNome()} <br>
            idade:${pessoa.getIdade()}
        `
    })
}

btn_add.addEventListener("click",()=>{        
    const nome = document.getElementById("f_nome")
    const idade = document.getElementById("f_idade")
    const p = new Pessoa(nome.value, idade.value)
    pessoas.push(p)

    nome.value = ""
    idade.value = ""
    nome.focus()

    addPessoa()
  

    console.log(pessoas)
})