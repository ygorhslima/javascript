const nome = Symbol("")
const numero = Symbol("")
const corUniforme = Symbol("")
console.log(nome.description)

//privando as propriedades
const j = {
    [nome]:'j1',
    [numero]:10,
    [corUniforme]:"Amarelo" 
}

for(let p in j){
    console.log(p)
}
console.log(j[nome])