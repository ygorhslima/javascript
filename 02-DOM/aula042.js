let idades = [10,11,12,13,14,15,16,17,20,30,40,50,18,21,33,42];

const maior = idades.filter((idade)=>{
    if (idade >= 18){
        return idade;
    }
});

const menor = idades.filter((idade)=>{
    if(idade < 18){
        return idade;
    }
});

console.log(maior);
console.log(menor);