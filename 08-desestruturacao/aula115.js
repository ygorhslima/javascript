let numeros = [10,20,30,40,50,60,70,80,90]
let[a,b,c,...d] = numeros // neste caso o primeiro valor é adicionado no a, o segundo valor no b, o terceiro valor no c, todo o resto está no d
console.log(a)
console.log(b)
console.log(c)
console.log(d)

const obj = {nome: "Bruno",canal:"CFBcursos",curso:"JavaScript"}
let{nome,canal} = obj
console.log(nome,canal)

const cores=()=>{return ["verde","amarelo","azul","branco"]}
let[c1,c2,c3]=cores()
console.log(c1,c2,c3)