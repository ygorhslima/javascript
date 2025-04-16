var idade = 30
console.log(idade)
if (idade < 16){
    console.log("Menor de idade")
} else if (idade < 18 || idade > 65) {
    console.log("voto opcional")
} else {
    console.log("voto obrigatório")
}