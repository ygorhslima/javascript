let n = new String("Bruno Pinho Campos")
console.log(n)

console.log(n.search(/pinho/i))
// Apenas números
console.log(/^\d+$/.test("12345")); // true

// Apenas letras
console.log(/^[a-zA-Z]+$/.test("abcXYZ")); // true

// CEP BR (00000-000)
console.log(/^\d{5}-?\d{3}$/.test("12345-678")); // true

// Data (dd/mm/yyyy)
console.log(/^\d{2}\/\d{2}\/\d{4}$/.test("20/08/2025")); // true

// Capturar menções (@usuario)
console.log("@ygor e @chat".match(/@\w+/g)); // ["@ygor", "@chat"]

// Encontrar hashtags
console.log("#dev #javascript".match(/#\w+/g)); // ["#dev", "#javascript"]
