/*desestruturação de objetos*/

const Pessoa = {
    nome:"joão carlos",
    idade:25,
    profissao:"Desenvolvedor"
}

const {nome, idade, profissao} = Pessoa

console.log(nome)
console.log(idade)
console.log(profissao)

/*nomeando variáveis durante a desestruturação*/

const {nome: nomeCompleto, idade: anos} = Pessoa

console.log(nomeCompleto)
console.log(idade)

/*valores padrão*/

const {cidade = 'desconhecida'} = Pessoa
console.log(cidade)
