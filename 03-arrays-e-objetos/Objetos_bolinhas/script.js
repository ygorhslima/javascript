// obtendo os elementos html
const palco = document.getElementById("palco");
const num_objetos = document.getElementById("num_objetos");
const txt_qtde = document.getElementById("txt_qtde");
const btn_add = document.getElementById("btn_add");
const btn_remover = document.getElementById("btn_remover");

// variáveis de controle da largura e altura

let larguraPalco = palco.offsetWidth; // offsetWidth:  retorna a largura total de um elemento HTML em pixels,
let alturaPalco = palco.offsetWidth;

// os objetos bolas que serão criados serão adicionados dentro da array bolas
let bolas = []

//quando redimensionar a tela será disparado um evento
window.addEventListener("resize",()=>{

})