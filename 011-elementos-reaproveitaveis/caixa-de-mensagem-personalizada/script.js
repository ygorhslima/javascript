const config = {
    cor: "rgba(186, 52, 52, 1)"
}

const cxmsg = new Cxmsg(config);

const btn_mostrarcxmsg = document.getElementById("btn_mostrarcxmsg")
const btn_mostrarcxmsg2= document.getElementById("btn_mostrarcxmsg2")
const btn_mostrarcxmsg3= document.getElementById("btn_mostrarcxmsg3")

btn_mostrarcxmsg.addEventListener("click",()=>{
    cxmsg.mostrar("CFB Cursos", "Curso de JavaScript")
})

btn_mostrarcxmsg2.addEventListener("click",()=>{
    cxmsg.mostrar("Youtube","Canal de programação")
})

btn_mostrarcxmsg3.addEventListener("click",()=>{
    cxmsg.mostrar("Jaa")
})