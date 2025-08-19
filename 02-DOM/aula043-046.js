const caixaCursos = document.querySelector("#caixaCursos");
const btn_c = [...document.querySelectorAll(".curso")];
const c1_2 = document.querySelector("#c1_2")
const cursos = ["HTML","CSS","JavaScript","PHP","React","MySQL","React"];
const btnCursosSelecionado = document.getElementById("btnCursoSelecionado")
const btnRemoverSelecionado = document.getElementById("btnRemoverCurso")
const btnAdicionarNovoCursoAntes = document.getElementById("btnAdicionarAntes");
const btnAdicionarNovoCursoDepois = document.getElementById("btnAdicionarDepois");
const nomeCurso = document.getElementById("nomeCurso")
var indice = 0


// criando uma função que vai remover a estilização de seleção quando clicar em outro elemento, isto é, quando você quiser selecionar outro item, vai tirar a seleção do item atual e vai para o item que você clicou, não duplicando
const tirarSelecao = ()=>{
    const cursosSelecionados = [...document.querySelectorAll(".selecionado")];
    cursosSelecionados.map((el)=>{
        el.classList.remove("selecionado")
    })
}

const criarNovoCurso=(curso)=>{
    // criando um elemento div, com os atributos de id com as chaves de identificação de cada item e a classe utiliza o estilo CSS .curso e .c1
    const newEl = document.createElement("div");
    newEl.setAttribute("id","c"+indice);
    newEl.setAttribute("class","curso c1");
    /*mostra o conteúdo que estar no array, iterando elemento por elemento*/
    newEl.innerHTML = curso

    /**função de clique para remoção do item */
    newEl.addEventListener("click",(evt)=>{
        tirarSelecao()
        evt.target.classList.toggle("selecionado")
    })

    return newEl
}

cursos.map((el)=>{
   const novoElemento = criarNovoCurso(el)
   caixaCursos.append(novoElemento);
   indice++
})

const cursoSelecionado = ()=>{
    const cursosSelecionados = [...document.querySelectorAll(".selecionado")]
    return cursosSelecionados[0]
}

/*Quando o usuário clicar no botão de selecionar, primeiro vai tentar verificar se o usuário clicou no radio button do item, se clicou vai mostrar qual é o curso selecionado, caso contrário, vai alertar na tela pedindo para selecionar um curso*/
btnCursosSelecionado.addEventListener("click",(evt)=>{
    try{
        alert("curso selecionado " + cursoSelecionado().innerHTML)
    }catch(error){
        alert("Selecione um curso")
    }
})

btnRemoverSelecionado.addEventListener("click",()=>{
    let cs = cursoSelecionado()
    if(cs != undefined){
        cs.remove()
    }else{
        alert("selecione um curso")
    }
})

btnAdicionarNovoCursoAntes.addEventListener("click",()=>{
    try{ 
        if(nomeCurso.value != ""){
            const novoCurso=criarNovoCurso(nomeCurso.value) // criando toda a estrutura e estilo do item
            caixaCursos.insertBefore(novoCurso,cursoSelecionado()) // adicionando dentro da div pai o novo curso 
        }else{
            alert("digite o nome do curso")
        }
    }catch(error){
        alert("Selecione um curso")
    }
})

btnAdicionarNovoCursoDepois.addEventListener("click",()=>{
    try{ 
        if(nomeCurso.value != ""){
            const novoCurso=criarNovoCurso(nomeCurso.value) // criando toda a estrutura e estilo do item
            caixaCursos.insertBefore(novoCurso,cursoSelecionado().nextSibling) // adicionando dentro da div pai o novo curso 
        }else{
            alert("digite o nome do curso")
        }
    }catch(error){
        alert("Selecione um curso")
    }
})