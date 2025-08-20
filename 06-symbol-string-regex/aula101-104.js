const nome = "Bruno João"
const canal = new String("CFBcursos canal de tecnologia e programação")

console.log(nome)
console.log(nome.toUpperCase())
console.log(nome.toLowerCase())
console.log(typeof(nome)) // tipo string

console.log(nome.charAt(0)) // onde está a letra através de sua posição 
console.log(nome.charCodeAt(0)) // pegando o código ASCII do char específico
console.log(nome.concat(canal)) // concatenando duas string
console.log(nome.indexOf("Br"))
console.log(nome.lastIndexOf("o"))

console.log(canal.localeCompare(nome)) // compara se uma string é maior que a outra no caso a string de canal é maior que a string nome
console.log(nome.replace("B","P")) // subtitui a primeira ocorrência de uma string especificada por outra Exemplo: Pruno
console.log(nome.search("")) // encontra a primeira ocorrência de sua string pesquisada
console.log(nome.slice(6,11))

let arr_nome = nome.split(" ")
console.log(arr_nome) 