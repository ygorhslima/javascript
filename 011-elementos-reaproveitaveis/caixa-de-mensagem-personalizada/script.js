import { Cxmsg } from './componentes/Cxmsg.js';

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btn_mostrarcxmsg");
  const btn2 = document.getElementById("btn_mostrarcxmsg2");

  btn.addEventListener("click", () => {
    Cxmsg.ConfiguracoesBOX("CFB Cursos", "Curso de JavaScript", "#0f0");
  });
  btn2.addEventListener("click",()=>{
    Cxmsg.ConfiguracoesBOX("olá mundo","tudo bem com você ?","#0ff")
  })
});
