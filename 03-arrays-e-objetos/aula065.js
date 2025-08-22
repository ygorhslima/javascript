const Pessoa = {
    nome: "bruno",
    canal: "CFBcursos",
    curso: "JavaScript",
    aulas:{
        aula01:"introducao",
        aula02:"Variáveis e tipos primitivos",
        aula03:"condicional"
    }
}

console.log(Pessoa)
console.log(Pessoa.aulas)
console.log(Pessoa.aulas.aula01)
console.log(Pessoa.aulas.aula02)
console.log(Pessoa.aulas.aula03)

const s_json = JSON.stringify(Pessoa) /// converter o objeto literal em uma string json
console.log(s_json)


const json_pessoa = `{"nome":"bruno","canal":"CFBcursos","curso":"JavaScript","aulas":{"aula01":"introducao","aula02":"Variáveis e tipos primitivos","aula03":"condicional"}}`

const converter_json_pessoa = JSON.parse(json_pessoa) /// converter o json em objeto literal
console.log(converter_json_pessoa)