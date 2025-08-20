class Jogador{
    constructor(nome){
        this.nome = nome
        this.id = Symbol() // criando o id de cada jogador usando Symbol
    }
}

let jogadores = [
    new Jogador("j1"),
    new Jogador("j2"),
    new Jogador("j3"),
    new Jogador("j4")
]

// let s1 = jogadores[0].id // obtendo o id do jogador 0

let s = []

// retornando somente os jogadores que forem diferentes do S1
let s_jogadores=jogadores.filter((j)=>{
    return j.nome == "j1"
})   

s=s_jogadores.map((j)=>{
    return j.id
})

console.log(s_jogadores)
console.log(s)

