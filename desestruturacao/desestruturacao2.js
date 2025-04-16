const num = [1,2,3,4]
const [primeiro, segundo, terceiro, quarto] = num
console.log(primeiro)
console.log(segundo)
console.log(terceiro)
console.log(quarto)

console.log('-------------------------')

const num2 = [5,6,7,8]
const [quinto, , setimo] = num2
console.log(quinto)
console.log(setimo)

console.log('-------------------------')

const num3 = [9,10,11,12]
const [nono, ...resto] = num3
console.log(nono)
console.log(resto)

function exibirPessoa({nome, idade}){
    console.log(`Nome: ${nome}, Idade: ${idade}`)
}

const Pessoa = {nome: "joao Carlos", idade: 25}
exibirPessoa(Pessoa)
