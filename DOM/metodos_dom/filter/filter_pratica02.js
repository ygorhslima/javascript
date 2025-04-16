const caixaCursos = document.querySelector("#caixaCursos")
const btn_c = [...document.querySelectorAll(".curso")]
const c1_2 = document.querySelector("#c1_2")
const cursos = ["HTML", "CSS", "JavaScript", "PHP", "React", "MySQL", "ReactNative"]
const btnCursoSelecionado = document.getElementById("btnCursoSelecionado")
const btnRemoverCurso = document.getElementById("btnRemoverCurso") 

const btnAdicionarNovoCursoAntes = document.getElementById("btnAdicionarNovoCursoAntes")
const btnAdicionarNovoCursoSDepois = document.getElementById("btnAdicionarNovoCursoDepois")
let nomeCurso = document.getElementById("nomeCurso")

let indice = 0
const criarNovoCurso=(curso)=>{
    const novoElemento = document.createElement("div")
    novoElemento.setAttribute("id", "c"+indice)
    novoElemento.setAttribute("class", "curso c1")
    novoElemento.innerHTML = curso

    const comandos = document.createElement("div")
    comandos.setAttribute("class", "comandos")

    const rb = document.createElement("input")
    rb.setAttribute("type", "radio")
    rb.setAttribute("name", "rb_curso")

    comandos.appendChild(rb)
    novoElemento.appendChild(comandos)
    return novoElemento
}

// adicionando os cursos que estão na array
cursos.map((el)=>{
   const novoCurso = criarNovoCurso(el)
   caixaCursos.appendChild(novoCurso)
   indice++

})

const radioSelecionado=()=>{
    const todosRadios = [...document.querySelectorAll("input[type=radio]")]
    const radioSelecionado = todosRadios.filter((ele)=>{
        return ele.checked
    })
    return radioSelecionado[0]
}

btnCursoSelecionado.addEventListener("click",(evt)=>{
    const rs = radioSelecionado()
    try {
        const cursoSelecionado = rs.parentNode.previousSibling.textContent
        alert("curso selecionado: " + cursoSelecionado)
    }catch(error){
        alert("selecione o curso")
    }
})

btnRemoverCurso.addEventListener("click",(evt)=>{
    const rs = radioSelecionado()
    try {
        const cursoSelecionado = rs.parentNode.parentNode
        cursoSelecionado.remove()
    } catch(error) {
        alert("selecione um curso")
    }
})

btnAdicionarNovoCursoAntes.addEventListener("click", (evt)=>{
    const rs = radioSelecionado()
    try {
        const cursoSelecionado = rs.parentNode.parentNode
        const novoCurso = criarNovoCurso(nomeCurso.value)
        caixaCursos.insertBefore(novoCurso, cursoSelecionado)
    }catch(error){
        alert("selecione o curso")
    }
})

btnAdicionarNovoCursoSDepois.addEventListener("click", (evt)=>{
    const rs = radioSelecionado()
    try {
        const cursoSelecionado = rs.parentNode.parentNode
        const novoCurso = criarNovoCurso(nomeCurso.value)
        caixaCursos.insertBefore(novoCurso, cursoSelecionado.nextSibling)
    }catch(error){
        alert("selecione o curso")
    }
})