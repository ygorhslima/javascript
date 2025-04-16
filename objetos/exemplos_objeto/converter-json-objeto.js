const pessoa = {
    nome: "bruno",
    canal: "CFB CURSOS",
    curso: "JavaScript",
    aula:{
        aula01: "introdução",
        aula02: "Variáveis",
        aula03: "Condicional"
    }
}
const string_pessoa = '{"nome":"bruno","canal":"CFB CURSOS","curso":"JavaScript","aula":{"aula01":"introdução","aula02":"Variáveis","aula03":"Condicional"}}'

const s_json_pessoa = JSON.stringify(pessoa)
const o_json_pessoa = JSON.parse(string_pessoa)

console.log(s_json_pessoa)
console.log(o_json_pessoa)