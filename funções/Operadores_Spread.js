const jogador01 = {nome:"Darkzin",energia:100,vida:200,magia:150,}
const jogador02= {nome:"DeadCode",energia:100,vida:200,velocidade:80}
const jogador03 = {...jogador01,...jogador02}
console.log(jogador03)

const soma = (v1,v2,v3)=>{
    return v1+v2+v3
}
let valores = [1,5,4]
console.log(soma(...valores))