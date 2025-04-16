function* cores() {
    yield "vermelho"
    yield "preto"
    yield "azul"
    yield "branco"
}
const iterator=cores()
for(let cor of iterator){
    console.log(cor)
}