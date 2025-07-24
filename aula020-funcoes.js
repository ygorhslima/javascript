function nome(nome, idade /*<- parâmetro*/){ // declaração da função
    console.log(`olá ${nome} você tem ${idade} anos e você é ${idade < 18 ? "menor de idade":"maior de idade"}`)
} 
nome("joaozinho", 13) // chamada da função
nome("ygor",19) // chamada da função
nome("Gilberto", 56) // chamada da função