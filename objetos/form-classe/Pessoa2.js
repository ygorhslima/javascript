let pessoas = []

const btn_add = document.querySelector("#btn_add")
const resultado = document.querySelector(".res")

const addPessoa=()=>{
    resultado.innerHTML = ''
    pessoas.map((p) =>{
        const div = document.createElement("div")
        div.setAttribute("class", "pessoa")
        div.innerHTML = `nome: ${p.nome} <br> ${p.idade}`
        resultado.appendChild(div)
    })
}

btn_add.addEventListener("click", (evt) =>{
    const nome = document.querySelector("#f_nome").value
    const idade = document.querySelector("#f_idade").value

    //objeto literal
    const Pessoa = {
        nome: nome,
        idade: idade
    }
    pessoas.push(Pessoa)
    document.querySelector("#f_nome").value = ''
    document.querySelector("#f_idade").value = ''
    document.querySelector("#f_nome").focus()
    addPessoa()
})