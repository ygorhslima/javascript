function operadoresAritmeticos(){
    /**
     * + soma
     * - subtração
     * * multiplicação
     * / divisão
     * % módulo
     * ++ incremento
     * -- decremento
     * += variável recebe ele mesmo mais valor  
     * -= variável recebe ele mesmo menos valor
     */
    let num1=0,num2=0

    num1 = 50
    num2 = 2

    let soma= num1 + num2
    let subtracao= num1 - num2
    let multiplicacao= num1 * num2
    let divisao = num1 / num2
    let resto = num1 % num2

    expressao = (soma) * 2

    console.log(`${num1} + ${num2} = ${soma}`)
    console.log(`${num1} - ${num2} = ${subtracao}`)
    console.log(`${num1} * ${num2} = ${multiplicacao}`)
    console.log(`${num1} / ${num2} = ${divisao}`)
    console.log(`${num1} % ${num2} = ${resto}`)
}
console.log(operadoresAritmeticos())
/***----------------------------------------------------------------------------------------------------- */

function operadoresRelacionais(){
    /**
     * > maior
     * < menor
     * >= maior ou igual
     * <= menor ou igual
     * == igual (não ligando com tipo)
     * === idêntico (se importando com o valor e tipo da variável)
     * != diferente
     * = atribuição de variável
     */

    let a=10
    let b=12
    let c=20
    let d=10

    console.log(`${a} > ${b} = ${a > b}`) // 10 > 12 = false
    console.log(`${a} < ${b} = ${a < b}`) // 10 < 12 = true
    console.log(`${a} <= ${c} = ${a <= c}`) // 10 <= 20 = true
    console.log(`${b} >= ${c} = ${b >= c} `) // 12 >= 20 = false
    console.log(`${a} == ${d} ${a==d}`) // 10 == 10 = true
    console.log(`${a} != ${b} = ${a != b}`) // 10 != 12
}
console.log(operadoresRelacionais())

/***----------------------------------------------------------------------------------------------------- */
function operadoresLogicos(){
    //  && -> E and
    //  || -> OU or
    //  !  -> Não (inversão de valor) not

    let a = true
    let b = true    

    let c = true 
    let d = false
    
    let e = false 
    let f = true
    
    let g = false 
    let h = false 
    
    let i = false
    let j = true 

    console.log(`${a} && ${b} = ${a && b}`) // true
    console.log(`${c} && ${d} = ${c && d}`) // false
    console.log(`${e} && ${f} = ${e && f}`) // false
    console.log(`${g} && ${h} = ${g && h}`) // false 

    console.log(`${a} || ${b} = ${a || b}`) // true
    console.log(`${c} || ${d} = ${c || d}`) // true
    console.log(`${e} || ${f} = ${e || f}`) // true
    console.log(`${g} || ${h} = ${g || h}`) // false

    
    console.log(`!${i} = ${!i}`) // true 
    console.log(`!${j} = ${!j}`) // false 
    /**
     * Tabela verdade 
        true && true = true
        true && false = false
        false && true = false
        false && false = false
       
        true || true = true
        true || false = true
        false || true = true
        false || false = false
       
        !false = true
        !true = false
    */
}
console.log(operadoresLogicos())