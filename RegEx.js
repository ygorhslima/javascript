//exemplos práticos
let nome = new String("Bruno Pinho Campos 1979")
console.log(nome.search(/pinho/i))
console.log(nome.match(/[a-m|0-9]/ig))
 

let email = "bruno@bruno.com.br"

//validar CPF
const regexCPF = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/
console.log(regexCPF.test("123.456.789-00"))


//encontrar todas as palavras em um texto
const texto = "Aprender JavaScript é muito legal"
const regexPalavras = /\b\w+\b/g
console.log(texto.match(regexPalavras))

