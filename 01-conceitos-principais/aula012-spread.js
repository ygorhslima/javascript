//spread (...) = cópia de 
const objs = document.getElementsByTagName("div")
const objs2 = [...objs]
console.log(objs)
console.log(objs2)

objs2.map((elements)=>{
    elements.innerHTML = "olá mundo"
})


const n1 = [20,30,40]
const n2 = [22,33,44]
const n3 = [...n1, ...n2]
console.log(n3)

const jogador1 = {nome:'Spider-Man', energia:100, vidas:150, agilidade:200}
const jogador2 = {nome:"Batman", energia: 100, vidas:150, forca:200}
const jogador3 = {...jogador1, ...jogador2}
jogador3.nome = 'Superman'
console.log(jogador3)