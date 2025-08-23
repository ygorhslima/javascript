// obtendo todas as teclas numéricas
const teclasNum = [...document.querySelectorAll(".num")];
// obtendo todas as teclas de operação
const teclaOp = [...document.querySelectorAll(".op")];
const teclaRes = document.querySelector(".res");
const display = document.getElementById("display");

const tlimpar = document.getElementById("tlimpar");
const onof = document.getElementById("onof");
const tigual=document.getElementById("tigual");
const tcpy = document.getElementById("tcpy");

//variáveis de controle 
let sinal=false;
let decimal=false;

// iterando cada botão do teclasNum
// iterando cada botão do teclasNum
teclasNum.forEach((el)=>{
    el.addEventListener("click",(evt)=>{
        sinal = false;
        const valor = evt.target.innerHTML;

        if (valor === ",") {
            // pega o último número digitado (separando pelos operadores)
            const ultimoNumero = display.innerHTML.split(/[\+\-\*\/]/).pop();

            // só adiciona a vírgula se o número atual ainda não tiver
            if (!ultimoNumero.includes(",")) {
                display.innerHTML += valor;
            }
        } else {
            // remove o zero inicial
            if (display.innerHTML === "0") {
                display.innerHTML = "";
            }
            display.innerHTML += valor;
        }
    });
});

teclaOp.forEach((el)=>{
    el.addEventListener("click",(evt)=>{
        // se não tiver sinal, ou seja se sinal for false, será colocado o sinal para true e será escrito o display na tela
        if(!sinal){
            sinal=true
            // se o display for igual a 0, será apagado o zero e substituir para a operação digitada
             if(display.innerHTML == "0"){
                display.innerHTML = ""
            }
            display.innerHTML += evt.target.innerHTML // adicionando para dentro do display a obtenção do valor
        }
    });
});


//botão para limpar elementos
tlimpar.addEventListener("click",()=>{
    sinal=false
    decimal=false 
    display.innerHTML = "0"
})

tigual.addEventListener("click",()=>{
    sinal=false
    decimal=false

    // eval() =>  função que avalia a expresão que recebeu como parâmetro, se os caracteres forem valores ele resolve a expressão
    const res = eval(display.innerHTML)

    display.innerHTML=res
    if(res == Infinity){
        display.innerHTML = "valor não possível"
    }
})

//botão de cópia da operação
tcpy.addEventListener("click",()=>{
    navigator.clipboard.writeText(display.innerHTML)
})