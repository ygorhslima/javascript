
// criando uma variável já desestruturado diretamente passando uma variável de arrays
let numeros = [50,60,70,80]
let [num1,num2,num3,num4] = numeros
console.log(num1,num2,num3,num4)

/*desestruturando variáveis separadas e associando cada variável a um valor diretamente*/
let a,b,c,d;
[a,b,c,d]=[10,20,30,40];
console.log(a,b,c,d);

/**desestruturação de objetos**/
let e,f,g,h;
({e,f,g,h} = {e:"vermelho",f:"verde",g:"amarelo",h:"branco"})
console.log(e,f,g,h)
