/*criando dois symbols, que seria um valor único que nunca vai se repetir*/
const s1 = Symbol()
const s2 = Symbol()
console.log(s1,s2)

// retorna um identificador no registro global
const s3 = Symbol.for("bruno")
console.log(Symbol.keyFor(s3)) // mostra qual é o identificador da variável com Symbol

