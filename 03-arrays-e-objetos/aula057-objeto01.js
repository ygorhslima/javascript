class Pessoa{
    constructor(pnome){
        this.nome = pnome
    }
}

let p1 = new Pessoa("João")
let p2 = new Pessoa("Maria")
let p3 = new Pessoa("Guilherme")
console.log(`{${p1.nome}, ${p2.nome}, ${p3.nome}}`)